const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:19006',
    methods: 'GET,POST',
}));

app.listen(5000, '0.0.0.0', () => {
    console.log('Server running at http://0.0.0.0:5000');
});
  
app.post("/submit-message", async (req, res) => {
    console.log('Received request:', req.body); // This should log the request body
    const { name, email, subject, message } = req.body;

    // Log the details of the body to ensure they're coming through correctly
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bernabeelvin@gmail.com",
        pass: "uozf zmot kspc smwn",
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: ["princessdianamartinezbo22@gmail.com, elvinbernabe34@gmail.com"],
      subject: subject,
      text: message,
    });

    console.log("Message sent:", info.messageId);
    res.status(200).json({ success: true, message: "Email sent successfully" });
});
