// add middlewares here related to projects
const Projects = require('./projects-model');
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

module.exports = { validateProjectId };
