const User = require('../../database/models/login.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
};

module.exports.register = async (req, res) => {

    try {
        const { email } = req.body;

        if (await User.findOne({ email }))
            return res.status(403).send({ error: 'Usuario já existe' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user, token: generateToken({ id: user.id }) })

    } catch (error) {
        return res.status(500).send({ error: 'Falha no registro', msg: error.message });
    };
};

module.exports.authenticate = async (req, res) => {
    try {

        const { email, password } = req.body;
    
        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(403).send({ error: "Usuario não existe" });

        if (!await bcrypt.compare(password, user.password))
            return res.status(403).send({ error: 'Senha Invalida' });

        user.password = undefined;

        res.send({ user, token: generateToken({ id: user.id }) });

    } catch (error) {
        return res.status(500).send({ error: 'Falha no registro', msg: error.message });
    };
};