// app.js

const express = require('express');
const cors = require('cors');
const mongoose = require('./db'); // Import the MongoDB connection
const productController = require('./controllers/productController');

const app = express();

// Enable CORS
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

app.get('/api/products', productController.getProducts);
app.get('/api/products/:id', productController.getProductById);
app.post('/api/products', productController.addProduct);
app.put('/api/products/:id', productController.updateProduct);
app.delete('/api/products/:id', productController.removeProduct);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
