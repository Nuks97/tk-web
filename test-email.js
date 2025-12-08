#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;

if (!MAILGUN_DOMAIN || !MAILGUN_API_KEY) {
  console.error("❌ Missing environment variables!");
  console.error("Make sure .env.local has:");
  console.error("  MAILGUN_API_KEY=your_key");
  console.error("  MAILGUN_DOMAIN=your_domain");
  process.exit(1);
}

const testEmail = {
  name: "Test User",
  email: "test@example.com",
  subject: "Test Email",
  message: "This is a test email from your local server."
};

const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

const formData = new URLSearchParams();
formData.append("from", `manusekweta@gmail.com`);
formData.append("to", "manusekweta@gmail.com");
formData.append("subject", `${testEmail.subject} (from ${testEmail.name})`);
formData.append(
  "text",
  `Name: ${testEmail.name}\nEmail: ${testEmail.email}\n\nMessage:\n${testEmail.message}`
);

console.log("📧 Sending test email...");
console.log(`Domain: ${MAILGUN_DOMAIN}`);
console.log(`To: manusekweta@gmail.com`);
console.log("");

fetch(url, {
  method: "POST",
  headers: {
    Authorization:
      "Basic " +
      Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    if (data.id) {
      console.log("✅ Email sent successfully!");
      console.log(`Message ID: ${data.id}`);
    } else {
      console.log("❌ Email failed!");
      console.log(data);
    }
  })
  .catch((err) => {
    console.error("❌ Error:", err.message);
  });
