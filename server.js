// Import the necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Use body-parser middleware to handle parsing of request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});