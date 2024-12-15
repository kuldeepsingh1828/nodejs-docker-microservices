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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  res.json(user);
});
module.exports = router;
