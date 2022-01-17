const mysql = require('mysql2/promise');

async function connect(query, values){

    const db = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'filelogs'
    });

    const [rows] = await db.query(query, values);

    return rows;
}

module.exports = {connect};



