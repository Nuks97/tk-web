import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const mg = new Mailgun(formData);
  const client = mg.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  const { name, email, subject, message } = req.body;

  try {
    await client.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Website Contact Form <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: "manusekweta@gmail.com",
      subject: `${subject} (from ${name})`,
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
}
