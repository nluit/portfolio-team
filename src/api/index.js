const express = require('express');

const project = require('./project/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/projects', project);

module.exports = router;
