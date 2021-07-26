const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('./database');

const router = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

const port = 3333;

app.listen(port, () => {
  console.log(`Apllication is running on port ${port}`)
});