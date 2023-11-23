const express = require('express');
const trainersRoutes = require('./trainers/index');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  app.use('/', (req, res) => {
    res.send('Runing API Trainers... 🥳')
  });
  router.use('/trainers', trainersRoutes);
};

module.exports = routerApi;
