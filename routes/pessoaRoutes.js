const express = require('express');
const router = express.Router();
const Pessoa = require('../models/pessoa');

// Rota para criar uma nova pessoa
router.post('/', async (req, res) => {
    try {
        const pessoa = await Pessoa.create(req.body);
        res.status(201).json(pessoa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para listar todas as pessoas
router.get('/', async (req, res) => {
    try {
        const pessoas = await Pessoa.findAll();
        res.json(pessoas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter uma pessoa por CPF
router.get('/cpf/:cpf', async (req, res) => {
    try {
        const pessoa = await Pessoa.findOne({ where: { cpf: req.params.cpf } });
        if (!pessoa) {
            res.status(404).json({ message: 'Pessoa não encontrada' });
            return;
        }
        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/id/:id', async (req, res) => {
    try {
        const pessoa = await Pessoa.findOne({ where: { id: req.params.id } });
        if (!pessoa) {
            res.status(404).json({ message: 'Pessoa não encontrada' });
            return;
        }
        res.json(pessoa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar uma pessoa
router.put('/:id', async (req, res) => {
    try {
        const pessoa = await Pessoa.findByPk(req.params.id);
        if (!pessoa) {
            res.status(404).json({ message: 'Pessoa não encontrada' });
            return;
        }
        await pessoa.update(req.body);
        res.json(pessoa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para excluir uma pessoa
router.delete('/:id', async (req, res) => {
    try {
        const pessoa = await Pessoa.findByPk(req.params.id);
        if (!pessoa) {
            res.status(404).json({ message: 'Pessoa não encontrada' });
            return;
        }
        await pessoa.destroy();
        res.json({ message: 'Pessoa excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
