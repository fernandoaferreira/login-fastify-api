const fastify = require('fastify')({ logger: true });

// const routes = require('fastify-routes');
// const cors = require('fastify-cors');

fastify.register(require('fastify-cors'), {})

fastify.register(require('./modulos/login/login.route'));
fastify.register(require('./modulos/users/user.route'));

const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`SERVER ONLINE >> ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
};

start();