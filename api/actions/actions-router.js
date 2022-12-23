// Write your "actions" router here!
const express = require('express');
const router = express.Router();
const Actions = require('./actions-model');
const { validateActionId } = require('./actions-middlware');

// GET actions by ID
router.get('/:id', validateActionId, (req, res) => {});

// GET all actions
router.get('/', (req, res) => {
  Actions.get().then((actions) => {
    res.status(200).json(actions);
  });
});
module.exports = router;
