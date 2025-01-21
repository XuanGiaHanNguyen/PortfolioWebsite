// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// require('dotenv').config();
// app.use(cors({
//     origin: 'http://localhost:5173', // or whatever your frontend URL is
//     credentials: true
//   }));

// const app = express();

// First, import required packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Then create the Express application instance
const app = express();
const port = 5000;

// Now we can use middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());

// Test route to verify server is running
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    
    // Log the received data
    console.log('Received contact form submission:', {
      fullName,
      email,
      message
    });
    
    // Send success response
    res.status(200).json({
      success: true,
      message: 'Message received successfully'
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing your message'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something broke on the server!'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});