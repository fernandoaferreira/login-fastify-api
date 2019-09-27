const User = require('../../database/models/login.model');

module.exports.list = async (req, res) => {
    try {

        const listUsers = await User.find({});

        return res.status(200).send(listUsers);
        
    } catch (error) {
        return res.status(500).send({ error: 'Falha ao gerar lista', msg: error.message });
    }
};