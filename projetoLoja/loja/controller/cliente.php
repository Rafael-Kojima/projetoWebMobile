<?php
    require_once '../DAO/conexao.php';
    require_once '../Model/Resposta.php';
    require_once '../Model/Cliente.php';

    $conexao = conectar();
    $cliente = new Cliente($conexao);

    $req = $_SERVER;
    $metodo = $req['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':
            $cliente->pegarClientes();
            break;
    
        case 'POST':
            $cliente->inserirCliente();
            break;
    
        case 'PUT':
            $cliente->alterarCliente();
            break;
    
        case 'PATCH':
            $cliente->alterarParcialCliente();
            break;
    
        case 'DELETE':
            $cliente->deletarCliente();
            break;
    
        default:
            echo json_encode(['erro' => 'Método não suportado']);
            break;
    }
?>
