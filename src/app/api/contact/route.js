import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'Kontakt Sajt <contact@eecmep.com>',  // Zvanična adresa pošiljaoca (tvoj novi domen)
      to: 'contact@eecmep.com',                   // Adresa na koju klijent prima upite sa sajta
      subject: `Novi upit: ${subject}`,
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