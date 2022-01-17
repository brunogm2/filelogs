const crypto = require('crypto')
const jwt = require("jsonwebtoken");
 
const AuthRepository = require('../repositories/AuthRepository');
const auth = require('../config/jwt.json');

class AuthController {

    async login(request, response) {
        const [, hash] = request.headers.authorization.split(' ');
        const [email, password] = Buffer.from(hash, 'base64').toString().split(':');
        
        const passwordHash = crypto.createHash('md5').update(password).digest('hex');

        const user = await AuthRepository.findOne({ email, passwordHash });

        const token = jwt.sign(
            {
                user: user.id,
            },
            auth.secret
        );

        if(!user){
            return response.status(404).json({ error: 'User not found' });
        }
      
        response.json({ user, token });
    }

    async store(request, response) {
        const { name, email, password } = request.body;

        const passwordHash = crypto.createHash('md5').update(password).digest('hex');

        if(!name){
            return response.status(400).json({ error: 'Name is required' });
        }

        const userExist = await AuthRepository.findByEmail(email);

        if(userExist){
            return response.status(400).json({ error: 'This e-mail is aleardy been taken' });
        }

        const user = await AuthRepository.create({
            name, email, passwordHash
        });

        const token = jwt.sign(
            {
                user: user.insertId,
            },
            auth.secret
        );

        return response.status(201).json({ message: 'user created successfully', data: { id: user.insertId, name: name, email: email }, token: token });
        
    }

    async index(request, response) {
        const users = await UsersRepository.findAll();

        response.json(users);
    }
}

module.exports = new AuthController();
