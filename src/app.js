const express = require('express');
const bodyParser = require('body-parser');

// ...

const routes = require('./Routes/route');

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(routes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
