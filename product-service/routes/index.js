var express = require('express');
var router = express.Router();
const axios = require('axios');



router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('Hello World');
});

const products = [
  {
    id: 1,
    name: 'Product 1',
  },
  {
    id: 2,
    name: 'Product 3',
  },
];

/**
 * @openapi
 * /products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/products', (req, res) => {
  res.json(products);
});

/**
 * @openapi
 * /products-with-users:
 *   get:
 *     summary: Get products with users
 *     responses:
 *       200:
 *         description: Products with users
 *       500:
 *         description: Error fetching users
 */
router.get('/products-with-users', async (req, res) => {
  try {
    const response = await axios.get(`http://user-service:3001/users`);
    console.log('response', response.data);
    res.json({
      products,
      users: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

/**
 * @openapi
 * /products-with-users/{id}:
 *   get:
 *     summary: Get a product with user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product and user
 *     responses:
 *       200:
 *         description: A product and user object
 *       500:
 *         description: Error fetching user data
 */
router.get('/products-with-users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`http://user-service:3001/users/${id}`);
    console.log('response', response.data);
    res.json({
      products,
      users: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});
module.exports = router;
