require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ API Route for Contact Form
app.post("/api/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending message" });
  }
});

// ✅ Serve React Frontend for Vercel
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// ✅ Start Server (Only for Local Dev, Not Needed on Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// ✅ Export for Vercel (Important!)
module.exports = app;
