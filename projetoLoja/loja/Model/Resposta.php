<?php 
class Resposta {
    public $status; 
    public $msg;

    public function __construct($status, $msg) {
        $this->status = $status;
        $this->msg = $msg;
    }
}

function gerarResposta($status, $operacao) {
    $mensagem = $status == "Sucesso" ? "Sucesso ao $operacao" : "Falha ao $operacao";
    $codigoStatus = $status == "Sucesso" ? '200' : '400';
    
    return new Resposta($codigoStatus, $mensagem);
}