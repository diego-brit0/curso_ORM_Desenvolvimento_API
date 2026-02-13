const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();

const router = Router();

const origem = ''

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res) );
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res) );
router.delete('/pessoas/:id', (req, res) => pessoaController.deleta(req, res) );

module.exports = router;
