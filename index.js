var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h3> Teste heroku. Thiago Souza Xavier  </h3>');
});

app.listen(process.env.PORT || 8089);
