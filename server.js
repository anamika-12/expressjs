'use strict';

const express = require('express');

// Constants
const PORT = 3010;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Anamika patel ,:) )');
});

app.listen(PORT, HOST);
console.log(`Running on http:${HOST}:${PORT}`);