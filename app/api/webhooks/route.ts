/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";
import { EmailTemplate } from "@/utils/template";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { CartType } from "@/utils/data";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

// Disable automatic body parsing for this route
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  let event: Stripe.Event;

  try {
    const buf = Buffer.from(await req.arrayBuffer()); // Convert ArrayBuffer to Buffer
    event = stripe.webhooks.constructEvent(buf, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err?.message);
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 });
  }

  // Handle the `checkout.session.completed` event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Extract session details
    const { metadata, amount_total } = session;

    try {
      const { data, error } = await resend.emails.send({
        from: "Hostruct Cakes and Pastries <onboarding@resend.dev>",
        to: ["topeakinfe@gmail.com"],
        subject: "New Order",
        react: EmailTemplate({
          name: metadata?.name as string,
          address: metadata?.address as string,
          phoneNumber: metadata?.phoneNumber as string,
          total: amount_total as number,
          cartItems: JSON.parse(metadata?.cartItems || "[]") as CartType[],
          message: metadata?.message as string,
        }) as React.ReactElement,
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }

      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }

  // Acknowledge the webhook event
  return NextResponse.json({ received: true });
}
