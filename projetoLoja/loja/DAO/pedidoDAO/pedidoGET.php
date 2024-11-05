<?php 

function consultar_pedido($conexao) {
    $sql = "SELECT * FROM Pedidos";
    $res = mysqli_query($conexao, $sql) or exit("Erro ao tentar consultar");

    $pedidos = [];

    while ($registro = mysqli_fetch_assoc($res)) {
        $pedidos[] = [
            'id_pedido' => utf8_encode($registro['id_pedido']),
            'id_cliente' => utf8_encode($registro['id_cliente']),
            'data' => utf8_encode($registro['data']),
        ];
    }

    fecharConexao($conexao);
    return $pedidos;
}

function consultar_pedidos_por_cliente($id_cliente, $conexao) {
    $sql = "SELECT 
            c.nome AS Cliente, 
            pr.nome AS Produto,
            pp.qtd AS Quantidade
            FROM Clientes c 
            JOIN Pedidos p ON c.ID = p.id_cliente 
            JOIN pedidos_produtos pp ON pp.id_pedido = p.id_pedido 
            JOIN Produtos pr ON pr.id = pp.id_produto 
            WHERE p.id_cliente = ?";
    
    $stmt = mysqli_prepare($conexao, $sql);
    mysqli_stmt_bind_param($stmt, 'i', $id_cliente);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt) or exit("Erro ao tentar consultar");

    $pedidos = [];

    while ($registro = mysqli_fetch_assoc($res)) {
        $pedidos[] = [
            'Cliente' => utf8_encode($registro['Cliente']),
            'Produto' => utf8_encode($registro['Produto']),
            'Quantidade' => utf8_encode($registro['Quantidade']),
        ];
    }

    fecharConexao($conexao);
    return $pedidos;
}
?>