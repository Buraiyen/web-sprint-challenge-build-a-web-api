// Write your "projects" router here!
const express = require('express');
const router = express.Router();
const Projects = require('./projects-model');

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
