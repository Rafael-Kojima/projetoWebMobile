<?php

function criar_pedido($dados, $conexao) {
    $id_cliente = $dados->id_cliente;
    $data = date('Y-m-d');

    $sql = "INSERT INTO Pedidos (id_cliente, data) VALUES ($id_cliente, '$data')";

    if (mysqli_query($conexao, $sql)) {
        return (mysqli_affected_rows($conexao) > 0) ? "Sucesso" : "Nenhuma alteração feita";
    } else {
        return "Falha: " . mysqli_error($conexao);
    }
}

function associar_produtos($id_pedido, $id_produto, $qtd, $conexao) {
    $sql = "INSERT INTO pedidos_produtos (id_pedido, id_produto, qtd) VALUES ($id_pedido, $id_produto, $qtd)";

    if (mysqli_query($conexao, $sql)) {
        return (mysqli_affected_rows($conexao) > 0) ? "Sucesso" : "Nenhuma alteração feita";
    } else {
        return "Falha: " . mysqli_error($conexao);
    }
}
?>