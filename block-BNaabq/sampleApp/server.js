const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Request and response generation
let app = express();

// middlewares
//In-built
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + `/assets`));

//Third-party
app.use(logger('dev'));

// Custom made

app.use(cookieParser());

app.use('/', (req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use('/about', (req, res, next) => {
  res.cookie('username', 'abhi_1234');
  res.send('About Page');
  next();
});

// Routing Middlewares
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.listen(6000, 'localhost', () => {
  console.log('Server listning to port 6000!');
});
