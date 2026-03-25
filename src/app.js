const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const userRoutes = require('./modules/users/user.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

// Rutas Modulares
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hola Cristofer bienvenido a mi primer backend ');
});

app.get('/test', (req, res) => {
    res.send('Hola Cristofer');
});

// Manejo de errores global
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = app;
