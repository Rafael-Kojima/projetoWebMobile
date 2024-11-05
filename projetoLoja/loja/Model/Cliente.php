<?php
require_once '../DAO/clienteDAO/clienteGET.php';
require_once '../DAO/clienteDAO/clientePOST.php';
require_once '../DAO/clienteDAO/clientePUT.php';
require_once '../DAO/clienteDAO/clientePATCH.php';
require_once '../DAO/clienteDAO/clienteDELETE.php';
require_once 'Resposta.php';

class Cliente {
    private $conexao;
    private $req;

    public function __construct($conexao) {
        $this->conexao = $conexao;
        $this->req = $_SERVER;
    }

    // GET para buscar clientes
    public function pegarClientes() {
        $clientes = pegar_cliente($this->conexao);
        echo json_encode($clientes);
    }

    // POST para inserir um novo cliente
    public function inserirCliente() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = inserir_cliente($dados, $this->conexao);
        
        $this->responder($status, 'inserir');
    }

    // PUT para atualizar um cliente
    public function alterarCliente() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = alterar_cliente($this->conexao, $dados);
        
        $this->responder($status, 'alterar');
    }

    // PATCH para atualização parcial de um cliente
    public function alterarParcialCliente() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = alterar_parcial_cliente($this->conexao, $dados);

        
        $this->responder($status, 'alterar parcialmente');
    }

    // DELETE para deletar um cliente
    public function deletarCliente() {
        $dados = json_decode(file_get_contents('php://input'));
        $status = deletar_clientes($this->conexao, $dados->ID);
        
        $this->responder($status, 'deletar');
    }

    private function responder($status, $acao) {
        $resposta = gerarResposta($status, $acao);
        echo json_encode($resposta);
        fecharConexao($this->conexao);
    }
}
