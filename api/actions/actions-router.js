// Write your "actions" router here!
const express = require('express');
const router = express.Router();
const Actions = require('./actions-model');
const { validateActionId, validateActionPost } = require('./actions-middlware');

// POST action
router.post('/', validateActionPost, (req, res) => {
  Actions.insert(req.body).then(() => {
    res.status(200).json(req.body);
  });
});
// GET actions by ID
router.get('/:id', validateActionId, (req, res) => {
  res.status(200).json(req.action);
});

// GET all actions
router.get('/', (req, res) => {
  Actions.get().then((actions) => {
    res.status(200).json(actions);
  });
});
module.exports = router;
