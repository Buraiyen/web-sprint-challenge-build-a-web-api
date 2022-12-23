// add middlewares here related to actions
const Actions = require('./actions-model');
const validateActionId = async (req, res, next) => {
  const { id } = req.params;
  await Actions.get(id).then((action) => {
    if (!action) {
      res.status(404).json({
        message: 'no action with given ID',
      });
      return;
    }
    res.status(200).json(action);
    next();
  });
};

module.exports = { validateActionId };
