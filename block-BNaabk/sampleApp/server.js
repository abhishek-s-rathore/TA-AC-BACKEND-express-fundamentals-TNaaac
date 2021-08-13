const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Welcome to home page!');
});

app.listen(3000, 'localhost', () => {
  console.log('Server listning to port 3000!');
});
