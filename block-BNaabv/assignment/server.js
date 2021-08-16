const express = require('express');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');

// Server Initialisation
let app = express();

// Handling Middlewares
// Inbuilt middlewares
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(express.static(__dirname + `/assets`));

// ThirdParty middlewares
app.use(logger('dev'));

// Inbuilt middlewares
app.use('/admin', (req, res, next) => {
  next('Unauthrised User');
});

//Handling Routs
app.get('/', (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty!');
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.send(req.body);
});

//  Handling Errors

app.use((req, res, next) => {
  res.send(`Error 404: Page not found`);
});

app.use((error, req, res, next) => {
  res.status(500).send(error);
});

// Port Assigning to Server
app.listen(3000, 'localhost', () => {
  console.log(`Server listning to port 3000!`);
});
