'use strict';

var express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

// Always return the main index.html, so react-router render the route in the client
app.use('/static', express.static('build/static'));

app.all('*', (req, res) => {
  res.sendFile('build/index.html', {root: __dirname});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
