// Write your "actions" router here!
const express = require('express');
const router = express.Router();
const Actions = require('./actions-model');

router.get('/', (req, res) => {
  res.json({ message: 'actions!' });
});
module.exports = router;
