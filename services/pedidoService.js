
const pedidosRepository = [];
 
function validar(dados) {
    if (!dados || typeof dados !== "object") {
        return "Dados do pedido inválidos";
    }

    if (typeof dados.cliente !== "string" || dados.cliente.trim() === "") {
        return "O cliente deve ser um texto obrigatório";
    }

    if (typeof dados.valor !== "number" || !Number.isFinite(dados.valor) || dados.valor <= 0) {
        return "O valor deve ser um número maior que zero";
    }

    const tiposPermitidos = ["entrega", "retirada"];

    if (!tiposPermitidos.includes(dados.tipo)) {
        return "Tipo de pedido inválido";
    }

    const prioridadesPermitidas = ["baixa", "normal", "alta"];

    if (!prioridadesPermitidas.includes(dados.prioridade)) {
        return "Prioridade inválida";
    }

    return null;
}

function criar(dados) {
    console.log("2 - SERVICE recebeu", dados);

    const erro = validar(dados);

    if (erro) {
        return { erro: erro };
    }

    const pedido = {
        id: pedidosRepository.length + 1,
        cliente: dados.cliente.trim(),
        tipo: dados.tipo,
        prioridade: dados.prioridade,
        status: "recebido",
        valor: dados.valor
    };

    pedidosRepository.push(pedido);

    console.log("3 - SERVICE criou", pedido);

    return pedido;
}

function buscarId(id) {
    const pedidoEncontrado = pedidosRepository.find(
        p => p.id === Number(id)
    );

    return pedidoEncontrado;
}

function listar() {
    return pedidosRepository;
}

function editar(id, status) {
    console.log("2 - SERVICE recebeu", { id, status });

    const pedidoEncontrado = pedidosRepository.find(
        p => p.id === Number(id)
    );

    if (!pedidoEncontrado) {
        return "Id inexistente";
    }

    const statusPermitidos = ["recebido", "entregue", "em rota"];

    if (!statusPermitidos.includes(status)) {
        return "Dados inválidos";
    }

    pedidoEncontrado.status = status;

    console.log("3 - SERVICE editou", pedidoEncontrado);

    return pedidoEncontrado;
}

module.exports = { criar, buscarId, editar, listar };
