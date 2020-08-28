const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "burgers_db"
} || process.env.JAWSDB_URL)

module.exports = db;