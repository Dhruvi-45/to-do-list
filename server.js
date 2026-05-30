const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple test route
app.get('/', (req, res) => {
    res.send('Backend server is running smoothly!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is sprinting on port ${PORT}`);
});