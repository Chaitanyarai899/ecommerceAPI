const pool = require('./db');

// Get all products
const getAllProducts = (req, res) => {
  try {
    pool.query('SELECT id, name, price FROM products', (error, results) => {
      if (error) throw error;
      res.status(200).json(results);
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new product
const createProduct = (req, res) => {
    try {
      const { id, name, price } = req.body;
      pool.query('INSERT INTO products (id, name, price) VALUES (?, ?, ?)', [id, name, price], (error, results) => {
        if (error) throw error;
        res.status(201).json({ message: 'Product created successfully', id });
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

// Update a product
const updateProduct = (req, res) => {
  try {
    const { id, name, price } = req.body;
    pool.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, id], (error, results) => {
      if (error) throw error;
      if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json({ message: 'Product updated successfully' });
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a product
const deleteProduct = (req, res) => {
  try {
    const { id } = req.body;
    pool.query('DELETE FROM products WHERE id = ?', [id], (error, results) => {
      if (error) throw error;
      if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json({ message: 'Product deleted successfully' });
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
