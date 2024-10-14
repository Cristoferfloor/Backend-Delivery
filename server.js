const { log } = require('console');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');

/*
IMPORTAR LAS RUTAS 


*/

const usersRoutes = require('./routes/userRoutes')

const app = express();
const port = process.env.PORT || 3001; 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

app.set('port', port);


/**
 * LLamado de las rutas 
 */
usersRoutes(app); 
const server = http.createServer(app);

const ipAddress = '192.168.100.9'; // Tu IP local
const hostname = ipAddress || 'localhost';

server.listen(port, hostname, () => {
    console.log('APLICACIÓN DE NODEJS ' + process.pid + ' Iniciando en el puerto ' + port + ' en ' + hostname + '....');
});

app.get('/', (req, res) => {
    res.send('Hola Cristofer bienvenido a mi primer backend ');
});

app.get('/test', (req, res) => {
    res.send('Hola Cristofer');
});


// Manejo de errores
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});
