// Write your "projects" router here!
const express = require('express');
const router = express.Router();
const Projects = require('./projects-model');
const { validateProjectId } = require('./projects-middleware');

// GET project by ID
router.get('/:id', validateProjectId, (req, res) => {
  res.status(200).json(req.project);
});

// GET all projects
router.get('/', (req, res) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'error when retrieving projects',
        stack: err.stack,
      });
    });
});

module.exports = router;
