require('dotenv').config(); // Make sure to import dotenv

const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: 'GET,POST',
}));

app.listen(5000, '0.0.0.0', () => {
    console.log('Server running at http://0.0.0.0:5000');
});

// Log environment variables to check if they are loaded properly
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? 'Exists' : 'Missing');

app.post("/submit-message", async (req, res) => {
    console.log('Received request:', req.body); // This should log the request body
    const { name, email, subject, message } = req.body;

    // Log the details of the body to ensure they're coming through correctly
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,  // Use the environment variable
            pass: process.env.GMAIL_PASS,  // Use the environment variable
        },
    });

    const info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: ["princessdianamartinezbo22@gmail.com", "elvinbernabe34@gmail.com"],  // Add your desired recipients
        subject: subject,
        text: message,
    });

    console.log("Message sent:", info.messageId);
    res.status(200).json({ success: true, message: "Email sent successfully" });
});
