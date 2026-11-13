// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON data sent from the frontend

// A simple test route
app.get('/', (req, res) => {
    res.json({ message: "GlucoBeam Backend is running smoothly!" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});