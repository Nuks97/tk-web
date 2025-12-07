import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  // Validate request body
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Check for required environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing email environment variables");
    return res.status(500).json({ 
      message: "Server configuration error - missing email credentials" 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "manusekweta@gmail.com",
      replyTo: email,
      subject: `${subject} (from ${name})`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email Error:", err);
    res.status(500).json({ 
      message: "Failed to send email", 
      error: err.message 
    });
  }
}
