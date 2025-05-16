import { CartType } from "@/utils/data";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, address, phoneNumber, total, cartItems } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cartItems.map((item: CartType) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.title, // or `item.name` depending on your data
          },
          unit_amount: Math.round(item.price * 100 * 0.3), // in pence (Stripe expects integer)
        },
        quantity: item.count,
      })),
      metadata: {
        name,
        address,
        phoneNumber,
        total,
        cartItems: JSON.stringify(cartItems),
      },
      success_url: `${request.nextUrl.origin}/success`,
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
