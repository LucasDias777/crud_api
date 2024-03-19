const Sequelize = require('sequelize');
const sequelize = require('../database');

const Pessoa = sequelize.define('Pessoa', {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    telefone: Sequelize.STRING,
    dataNascimento: Sequelize.STRING,
    cpf: {
        type: Sequelize.STRING,
        unique: true // Garante que o CPF seja único
    },
    status: Sequelize.ENUM('ativo', 'inativo')
});

module.exports = Pessoa;
