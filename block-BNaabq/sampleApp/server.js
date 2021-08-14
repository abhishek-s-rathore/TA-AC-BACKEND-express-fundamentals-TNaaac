const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

let app = express();

app.use(logger('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookie);
  var username = 'abhi_1234';
  res.cookie('username', username);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to home page!');
});
app.listen(6666, 'localhost', () => {
  console.log('Server listning to port 6666!');
});
