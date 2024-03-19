const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const CPF = sequelize.define('CPF', {
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  isValid: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = CPF;
