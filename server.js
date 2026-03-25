const http = require('http');
const app = require('./src/app');

const port = process.env.PORT || 3001;
app.set('port', port);

const server = http.createServer(app);

const ipAddress = '0.0.0.0'; 
const hostname = ipAddress || 'localhost';

server.listen(port, hostname, () => {
    console.log('APLICACIÓN DE NODEJS ' + process.pid + ' Iniciando en el puerto ' + port + ' en ' + hostname + '....');
});
