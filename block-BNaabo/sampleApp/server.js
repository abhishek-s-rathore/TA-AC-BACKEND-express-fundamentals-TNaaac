const express = require('express');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + `/assets`));

app.post('/json', (req, res) => {
  console.log(req.body);
});

app.post('/contact', (req, res) => {
  console.log(req.body);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5000, 'localhost', () => {
  console.log('Server listning to port 5000!');
});
