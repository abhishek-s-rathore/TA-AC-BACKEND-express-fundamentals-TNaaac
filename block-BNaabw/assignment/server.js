const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

// Server Initialisation
let app = express();

// Handling Middlewares
// Inbuilt middlewares
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(express.static(__dirname + `/assets`));

// ThirdParty middlewares
app.use(logger('dev'));
app.use(cookieParser());

// Inbuilt middlewares
app.use((req, res, next) => {
  res.cookie('username', 'abhi123');
  next();
});


//Handling Routs
app.get('/', (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/users.html')
});

app.get('/form', (req, res) => {
    res.sendFile(__dirname +`/form.html`);
  });

app.post('/form', (req, res) => {
  res.json(req.body);
});


//  Handling Errors

app.use((req, res, next) => {
  res.send(`Error 404: Page not found`);
});

app.use((error, req, res, next) => {
  res.status(500).send(error);
});


// Port Assigning to Server
app.listen(4000, 'localhost', () => {
  console.log(`Server listning to port 4000!`);
});