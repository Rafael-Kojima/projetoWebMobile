<?php
require_once '../DAO/conexao.php';
require_once '../Model/Resposta.php';
require_once '../Model/Pedido.php';

$conexao = conectar();
$pedido = new Pedido($conexao);

$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo === 'GET') {
    $id_cliente = $_GET['id_cliente'] ?? null;
    if ($id_cliente) {
        $pedido->consultarPedidosPorID(intval($id_cliente));
    } else {
        $pedido->consultarPedidos();
    }
} elseif ($metodo === 'POST') {
    $dados = json_decode(file_get_contents('php://input'));

    if (isset($dados->acao)) {
        if ($dados->acao === 'criar_pedido') {
            $pedido->criarPedido();
        } elseif ($dados->acao === 'associar_produtos') {
            $pedido->associarProdutos();
        } else {
            echo json_encode(['erro' => 'Ação POST não suportada']);
        }
    } else {
        echo json_encode(['erro' => 'Campo "acao" não encontrado']);
    }
} else {
    echo json_encode(['erro' => 'Método não suportado']);
}
?>