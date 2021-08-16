const express = require('express');
const logger = require('morgan');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/assets'));

app.use(logger('dev'));

app.use('/admin', (req, res, next) => {
  next('Unauthorised to access!');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.use((req, res, next) => {
  res.send(`404: Page not found!`);
});

app.use((error, req, res, next) => {
  // res.status = 400;
  // res.send(err);
  res.status(500).send(error);
});

app.listen(4444, 'localhost', () => {
  console.log('Server listning to port 4444!');
});
