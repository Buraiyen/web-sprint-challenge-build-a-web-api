// Write your "actions" router here!
const express = require('express');
const router = express.Router();
const Actions = require('./actions-model');
const {
  validateActionId,
  validateActionPost,
  validateActionPut,
} = require('./actions-middlware');

// DELETE action
router.delete('/:id', validateActionId, (req, res) => {
  Actions.remove(req.params.id).then(() => {
    res.status(200).json({
      message: `deleted action of id ${req.params.id}`,
    });
  });
});

// PUT action
router.put('/:id', validateActionId, validateActionPut, (req, res) => {
  Actions.update(req.params.id, req.body).then(() => {
    res.status(200).json(req.body);
  });
});

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
