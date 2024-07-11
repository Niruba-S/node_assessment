// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/send-query', (req, res) => {
//     const { name, email, query } = req.body;

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'your-email@gmail.com',
//             pass: 'your-email-password'
//         }
//     });

//     const mailOptions = {
//         from: email,
//         to: 'generic-email@example.com',
//         subject: 'New Query from Contact Form',
//         text: `Name: ${name}\nEmail: ${email}\nQuery: ${query}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send('Error sending email');
//         } else {
//             return res.status(200).send('Email sent: ' + info.response);
//         }
//     });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



// import express from 'express';
// import path from 'path';
// import { config } from 'dotenv';
// import { fileURLToPath } from 'url';
// import mongoose from 'mongoose';

// const app = express();
// const port = 3000;

// // Configure dotenv
// config();

// // Workaround for __dirname in ES6 modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a schema and model for news
// const newsSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     imageUrl: String,
//     date: { type: Date, default: Date.now }
// });

// const News = mongoose.model('News', newsSchema);

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'contact.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'about.html'));
// });

// // API endpoint to get news data
// app.get('/api/news', async (req, res) => {
//     try {
//         const news = await News.find().sort({ date: -1 }).limit(5); // Fetch the latest 5 news items
//         res.json(news);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Endpoint to get the API key
// app.get('/api/key', (req, res) => {
//     res.json({ apiKey: process.env.API_KEY });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// import express from 'express';
// import path from 'path';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Define a schema and model for news
// const newsSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     imageUrl: String,
//     date: { type: Date, default: Date.now }
// });

// const News = mongoose.model('News', newsSchema);

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'contact.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'about.html'));
// });

// // API endpoint to get news
// app.get('/api/news', (req, res) => {
//     News.find()
//         .then(news => res.json(news))
//         .catch(err => res.status(500).json({ error: err.message }));
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
