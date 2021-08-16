const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

let app = express();


app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/new', (req, res) => {
    
    
  });

app.listen(1234, 'localhost', () => {
  console.log('Server listning to port 1234!');
});
