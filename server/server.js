const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware to handle JSON requests and CORS
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Change this to match your frontend URL
    methods: ['POST']
  }));  

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "cornucopia.bio.ai@gmail.com",  // your email address from .env file
    pass: "ckis mzsf gdko azsk",  // your email password from .env file
  }
});

// POST route to send emails
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // The user sending the email
    to: 'cornucopia.bio.ai@gmail.com', // Your own email address where you want to receive the messages
    subject: `New message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
