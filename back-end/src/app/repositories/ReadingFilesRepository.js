const db = require('../../database');

class ReadingFilesRepository{

    async findAll() {
        const rows =  await db.connect('SELECT * FROM file_logs');

        return rows;
    }

    async create(logs) {

        const row = await db.connect(`
            INSERT INTO file_logs(logs)
            VALUES(?)  
        `, [logs]);

        return row;
    }
}

module.exports = new ReadingFilesRepository();