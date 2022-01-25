'use strict'

const Operator = use('App/Models/User');

class AuthController {
    async register({ request }){
        const data = request.only(['username', 'email', 'password']);
        const operator = await Operator.create({...data})
            .then(el => el);
        return operator;
    }
    async auth({ request, auth }){
        const {email, password} = request.only(['email', 'password']);
        const token = await auth.attempt(email, password)
            .then(el => el);
        return token
    }
}

module.exports = AuthController
