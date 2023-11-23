const express = require('express');
const app = express();

const cors = require('cors');
const routerApi = require('./routes/main.routes');

app.use(cors());

routerApi(app);
module.exports = app;
