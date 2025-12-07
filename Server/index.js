import express from "express";
import cors from "cors";
import formData from "form-data";
import Mailgun from "mailgun.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const mg = new Mailgun(formData);
  const client = mg.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });

  const { name, email, subject, message } = req.body;

  try {
    await client.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Website Contact Form <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: "YOUR_EMAIL@gmail.com",
      subject: `${subject} (from ${name})`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
