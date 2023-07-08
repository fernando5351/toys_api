const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes');

app.set('port', port);

// routes
app.post('/', (req, res) => res.send('Hello World!'));
router(app);

module.exports = app;