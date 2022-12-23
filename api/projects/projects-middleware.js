// add middlewares here related to projects
const Projects = require('./projects-model');

const validateProjectPut = async (req, res, next) => {
  const { name, description, completed } = req.body;
  if (!name || !description || completed === undefined) {
    res.status(400).json({
      message: 'name or description is missing',
    });
  }
  next();

  // const { id } = req.params;
  // await Projects.get(id)
  //   .then((project) => {
  //     if (project.completed) {
  //       res.status(400).json({
  //         message: 'cannot modify completed project',
  //       });
  //     }
  //     next();
  //   })
  //   .catch((err) => {
  //     res.status(404).json({
  //       message: 'error when validating PUT',
  //       error: err.message,
  //       stack: err.stack,
  //     });
  //   });
};
const validateProjectPost = (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({
      message: 'name or description is missing',
    });
  }
  next();
};

const validateProjectId = async (req, res, next) => {
  const { id } = req.params;
  Projects.get(id).then((project) => {
    if (!project) {
      res.status(404).json({
        message: 'no project with given ID',
      });
    }
    req.project = project;
    next();
  });
};

module.exports = { validateProjectId, validateProjectPost, validateProjectPut };
