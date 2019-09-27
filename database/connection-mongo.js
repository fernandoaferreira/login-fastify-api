const mongoose = require('mongoose');
const configDb = require('../config/configdb')

mongoose.connect(`mongodb://${configDb.user}:${configDb.pass}@ds159767.mlab.com:59767/login-fastify`)
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log('Erro ao conectar: ', err))


module.exports = mongoose;