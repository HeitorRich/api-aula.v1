const express = require('express');
const pedidoController = require('../controllers/pedidoController')

const router = express.Router();

router.post('/pedidos', pedidoController.criar);
router.get('/pedidos', pedidoController.listar);
router.get('/pedidos/:id', pedidoController.buscarId);
router.patch('/pedidos/:id', pedidoController.editar);


module.exports = router;

