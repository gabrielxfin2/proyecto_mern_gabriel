const mysql = require('mysql');
const connection =mysql.createConnection ({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'antony'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('mysql =========> conexion exitosa');
});

module.exports = mysql;