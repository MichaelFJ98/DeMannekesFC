const express = require("express");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Set up your email transporter with SMTP settings for insiter.be
const transporter = nodemailer.createTransport({
  host: "smtp-auth.mailprotect.be",
  port: 587,
  secure: false,
  auth: {
    user: "contact@insiter.be",
    pass: "]5DJdh_vjY9#s,8",
  },
});

// Define rate limiting options (5 requests per 5 minutes from the same IP)
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // 5 requests allowed per IP within the defined windowMs
  message: "Too many requests from this IP, please try again later.",
});

// Apply rate limiter to all requests
app.use(limiter);

// Enable CORS for specific origins
const allowedOrigins = ["https://insiter.be", "http://localhost:5001"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());

app.post("/send-email", (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: "contact@insiter.be",
    subject: `${subject} | ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return next(error);
    }

    console.log("Email sent:", info.response);
    res.json({ message: "Email sent successfully" });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
