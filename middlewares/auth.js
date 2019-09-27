const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    console.log('Validando a TOKEN >>>>>>', authHeader);

    if (!authHeader)
        return res.status(401).send({ error: 'Token não informado ' });

    jwt.verify(authHeader, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.send({ error: 'Token invalido' });
        }

        req.userID = decoded.id;
        return next();
    });

};