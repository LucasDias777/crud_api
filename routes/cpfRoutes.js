const express = require('express');
const router = express.Router();
const CPF = require('../models/cpf');
const cpfValidator = require('cpf-validador');

router.post('/validar', async (req, res) => {
  const { numero } = req.body;

  try {
    const isValid = cpfValidator.validate(numero);

    // Salva o resultado da validação no banco de dados
    await CPF.create({ number: numero, isValid: isValid });

    res.json({ isValid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
