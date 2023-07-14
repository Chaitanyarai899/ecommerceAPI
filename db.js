const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'mysql-135785-0.cloudclusters.net',
  user: 'admin',
  port: 19829,
  password: 'ZaZEhaAR',
  database: 'cruddb',
});

if (pool){
    console.log("Database Connected")
}
module.exports = pool;
