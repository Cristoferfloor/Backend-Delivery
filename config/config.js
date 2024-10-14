const mysql =  require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'delivery_licoreria',
});


db.connect(function(err) {
    if (err) throw err;
    console.log('DATABASE CONNECTED!...')
});

module.exports = db;


