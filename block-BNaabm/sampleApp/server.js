const express = require('express');

let app = express();

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use('/', logger);

app.get('/', (req,res) => {
  res.send('Welcome Boy!');
});

app.listen(4000, 'localhost', () => {
  console.log(`Server listning to port 4000!`);
});
