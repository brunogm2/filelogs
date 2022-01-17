const jwt = require('jsonwebtoken');
const auth = require('../config/jwt.json');
const AuthRepository = require('../repositories/AuthRepository');

module.exports = async (request, response, next) => {
    
    const [, token] = request.headers.authorization.split(' ');

    try {
        const payload = jwt.verify(token, auth.secret);
        const user = await AuthRepository.findById(payload.user);

        if(!user){
            return response.send(401);
        }

        next();
    } catch (error) {
        return response.status(401).send({ message: 'Failed authentication!' });
    }
    
}