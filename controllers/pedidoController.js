const pedidoService = require('../services/pedidoService')

function criar(req, res) {
    try {
        console.log("1 - CONTROLLER recebeu", req.body);

        const pedido = pedidoService.criar(req.body);

        if (pedido.erro) {
            return res.status(400).json({
                mensagem: pedido.erro
            });
        }

        return res.status(201).json(pedido);
    }
    catch(error) {
        return res.status(500).json({
            mensagem: "Erro interno do servidor"
        });
    }
}

function listar(req, res) {
    try {
        console.log("1 - CONTROLLER recebeu");

        const pedidos = pedidoService.listar();

        return res.status(200).json(pedidos);
    }
    catch(error) {
        return res.status(500).json({
            mensagem: "Erro interno do servidor"
        });
    }
}

function buscarId(req, res) {
    try {
        console.log("1 - CONTROLLER recebeu", req.params.id);

        const pedido = pedidoService.buscarId(req.params.id);

        if (!pedido) {
            return res.status(404).json({
                mensagem: "Pedido não encontrado"
            });
        }

        return res.status(200).json(pedido);
    }
    catch(error) {
        return res.status(500).json({
            mensagem: "Erro interno do servidor"
        });
    }
}

function editar(req, res) {
    try {
        console.log("1 - CONTROLLER recebeu", req.params);

        const pedido = pedidoService.editar(
            req.params.id,
            req.body.status
        );

        if (pedido === 'Id inexistente') {
            return res.status(404).json({
                mensagem: pedido
            });
        }

        if (pedido === 'Dados inválidos') {
            return res.status(400).json({
                mensagem: pedido
            });
        }

        return res.status(200).json(pedido);
    }
    catch(error) {
        return res.status(500).json({
            mensagem: "Erro interno do servidor"
        });
    }
}
module.exports = { criar, buscarId, listar, editar };