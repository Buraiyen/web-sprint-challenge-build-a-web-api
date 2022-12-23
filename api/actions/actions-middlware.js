// add middlewares here related to actions
const Actions = require('./actions-model');

const validateActionPut = (req, res, next) => {
  const { notes, description, completed, project_id } = req.body;
  if (!notes || !description || !project_id || completed === undefined) {
    res.status(400).json({
      message: 'missing fields for POST request',
    });
    return;
  }
  next();
};

const validateActionPost = (req, res, next) => {
  const { notes, description, project_id } = req.body;
  if (!notes || !description || !project_id) {
    res.status(400).json({
      message: 'missing fields for POST request',
    });
    return;
  }
  next();
};

const validateActionId = async (req, res, next) => {
  const { id } = req.params;
  await Actions.get(id).then((action) => {
    if (!action) {
      res.status(404).json({
        message: 'no action with given ID',
      });
      return;
    }
    req.action = action;
    next();
  });
};

module.exports = { validateActionId, validateActionPost, validateActionPut };
