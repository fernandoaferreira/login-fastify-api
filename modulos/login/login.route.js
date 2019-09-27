const LoginController = require('./login.controller');


async function routes(fastify, options) {

    fastify.post('/register', async (req, res) => {
        let result = await LoginController.register(req, res);
        return result;
    });

    fastify.post('/authenticate', async (req, res) => {
        let result = await LoginController.authenticate(req, res);
        return result;
    });
    
};

module.exports = routes;