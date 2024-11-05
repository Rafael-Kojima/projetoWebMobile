<?php 
require_once '../DAO/pedidoDAO/pedidoGET.php';
require_once '../DAO/pedidoDAO/pedidoPOST.php';
require_once 'Resposta.php';

class Pedido {
    private $conexao;

    public function __construct($conexao) {
        $this->conexao = $conexao;
    }

    public function criarPedido() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = criar_pedido($dados, $this->conexao);

        $this->responder($status, 'inserir');
    }

    public function associarProdutos() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = associar_produtos($dados->id_pedido, $dados->id_produto, $dados->qtd, $this->conexao);

        $this->responder($status, 'associar');
    }

    public function consultarPedidos() {
        $pedidos = consultar_pedido($this->conexao);
        echo json_encode($pedidos);
    }

    public function consultarPedidosPorID($id_cliente) {
        $pedidos = consultar_pedidoID($id_cliente, $this->conexao);
        echo json_encode($pedidos);
    }

    private function responder($status, $acao) {
        $resposta = gerarResposta($status, $acao);
        echo json_encode($resposta);
        fecharConexao($this->conexao);
    }
}