import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',     // mora biti tvoj domen
      to: 'aleksandarkatic47@gmail.com',         // gde stižu mejlovi
      subject: `Kontakt forma: ${subject}`,
      html: `
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong> ${message}</p>
      `,
    });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Greška' }, { status: 500 });
  }
}