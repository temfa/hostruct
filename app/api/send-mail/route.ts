import { EmailTemplate } from "@/utils/template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const payload = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Hostruct Cake and Pastries <onboarding@resend.dev>",
      to: ["bukolasalu88@gmail.com"],
      replyTo: payload.email,
      subject: "New Message",
      react: EmailTemplate({
        name: payload?.name,
        phoneNumber: payload?.phoneNumber,
        message: payload?.message,
        email: payload?.email,
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
