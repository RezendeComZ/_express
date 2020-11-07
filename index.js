const express = require('express');
const app = express();

app.listen(3000, () => console.log('Servidor rodando'))

const routes = require('./routes/routes')

app.use(routes); // Middleware