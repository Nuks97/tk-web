export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;

  const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

  const formData = new URLSearchParams();
  formData.append("from", `Website Contact Form <mailgun@${MAILGUN_DOMAIN}>`);
  formData.append("to", "YOUR_EMAIL@gmail.com");   // <-- Change to your real email
  formData.append("subject", `${subject} (from ${name})`);
  formData.append(
    "text",
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error("Mailgun error:", errData);
      return res.status(500).json({ message: "Mailgun error", error: errData });
    }

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ message: "Server error", error: err });
  }
}
