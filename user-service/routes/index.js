var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

/**
 * @swagger
 * /:
 *  get:
 *   description: Use to request all users
 *  responses:
 *   '200':
 *   description: A successful response
 */

router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
