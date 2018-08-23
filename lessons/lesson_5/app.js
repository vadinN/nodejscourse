'use strict';

const express = require('express');
const app = express();
const ejs = require('ejs');

const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

/**
 * todo: 
 * GET /
 * GET /list
 * GET /watch
 * POST /upload
 */


app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello world!'
  });
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});



