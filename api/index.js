import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // ✅ Uses environment variables
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_USER, // ✅ Send messages to your email
      subject: `New Contact Form Submission from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending message" });
  }
}