import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, address, phoneNumber, total, cartItems } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp", // Change currency if needed
            product_data: { name: "Cakes" },
            unit_amount: total * 100 * 0.3, // Convert price to cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        name,
        address,
        phoneNumber,
        total,
        cartItems: JSON.stringify(cartItems),
      },
      success_url: `${request.nextUrl.origin}/checkout`,
      cancel_url: `${request.nextUrl.origin}/checkout`,
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  }
}
