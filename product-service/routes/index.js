var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
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
