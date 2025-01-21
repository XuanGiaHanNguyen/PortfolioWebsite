// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', messageSchema);

// controllers/contactController.js
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendMessage = async (req, res) => {
    try {
        const { fullName, email, message } = req.body;

        // Save to MongoDB
        const newMessage = new Message({
            fullName,
            email,
            message
        });
        await newMessage.save();

        // Send auto-reply to user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for your message',
            text: `Dear ${fullName},\n\nThank you for contacting me. I have received your message and will get back to you soon.\n\nBest regards`
        });

        // Send notification to your email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Form Submission',
            text: `New message from: ${fullName} (${email})\n\nMessage: ${message}`
        });

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};

module.exports = { sendMessage };