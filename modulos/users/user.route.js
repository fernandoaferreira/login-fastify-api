const UserController = require('./user.controller');
const checkToken = require('../../middlewares/auth');

async function routes(fastify, options) {

    fastify.use(checkToken)

    fastify.get('/list', async (req, res) => {
        let result = await UserController.list(req, res);
        return result;
    });

};

module.exports = routes;