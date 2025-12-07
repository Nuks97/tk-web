import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function handler(req, res) {
  // Check for required environment variables
  if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    console.error("Missing Mailgun environment variables");
    return res.status(500).json({ 
      message: "Server configuration error - missing Mailgun credentials" 
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const mg = new Mailgun(formData);
  const client = mg.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  const { name, email, subject, message } = req.body;

  // Validate request body
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await client.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Website Contact Form <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: "manusekweta@gmail.com",
      replyTo: email,
      subject: `${subject} (from ${name})`,
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Mailgun Error:", err);
    res.status(500).json({ 
      message: "Failed to send email", 
      error: err.message 
    });
  }
}
