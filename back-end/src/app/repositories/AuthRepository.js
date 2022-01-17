const db = require('../../database');

class AuthRepository {

    async findOne({ email, passwordHash }) {
        
        const [row] = await db.connect(`
            SELECT * FROM users 
            WHERE email = ? AND password = ?`
        , [email, passwordHash]);

        return row;
    }

    async findById(id) {
        const [row] = await db.connect(`
            SELECT * FROM users 
            WHERE id = ?`
        , [id]);

        return row;
    }

    async findByEmail(email) {
        const [row] = await db.connect('SELECT * FROM users WHERE email = ?', [email]);

        return row;
    }

    async create({ name, email, passwordHash }) {
        const row = await db.connect(`
            INSERT INTO users(name, email, password)
            VALUES(?, ?, ?)  
        `, [name, email, passwordHash]);

        return row;
    }

}

module.exports = new AuthRepository();