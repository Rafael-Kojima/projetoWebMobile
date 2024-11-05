<?php
require_once '../DAO/produtoDAO/produtoGET.php';
require_once '../DAO/produtoDAO/produtoPOST.php';
require_once '../DAO/produtoDAO/produtoPUT.php';
require_once '../DAO/produtoDAO/produtoPATCH.php';
require_once '../DAO/produtoDAO/produtoDELETE.php';

class Produto {
    private $conexao;

    public function __construct($conexao) {
        $this->conexao = $conexao;
    }


    public function pegarProdutos() {
        $produtos = pegar_produto($this->conexao);
        echo json_encode($produtos);
    }

    public function inserirProduto() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = inserir_produto($dados, $this->conexao);

        $this->responder($status, 'inserir');
    }

    public function alterarProduto() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = alterar_produto($this->conexao, $dados);

        $this->responder($status, 'alterar');
    }

   
    public function alterarParcialProduto() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = alterar_parcial_produto($this->conexao, $dados);

        $this->responder($status, 'alterar parcialmente');
    }


    public function deletarProduto() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = deletar_produto($this->conexao, $dados->ID);

        $this->responder($status, 'deletar');
    }

    private function responder($status, $acao) {
        $resposta = gerarResposta($status, $acao);
        fecharConexao($this->conexao);
        echo json_encode($resposta);
    }
}