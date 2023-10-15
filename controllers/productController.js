// controllers/productController.js

const Product = require('./models/Product');


const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
};

const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  console.log('Adding a new product');
  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error creating product' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
};

const removeProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error removing product' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
};
