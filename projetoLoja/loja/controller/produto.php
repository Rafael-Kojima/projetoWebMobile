<?php
    header('Content-Type: application/json');
    require_once '../DAO/conexao.php';
    require_once '../Model/Resposta.php';
    require_once '../Model/Produto.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");


    $conexao = conectar();
    $produto = new Produto($conexao);

    $req = $_SERVER;
    $metodo = $req['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':
            $produto->pegarProdutos();
            break;
    
        case 'POST':
            $produto->inserirProduto();
            break;
    
        case 'PUT':
            $produto->alterarProduto();
            break;
    
        case 'PATCH':
            $produto->alterarParcialProduto();
            break;
    
        case 'DELETE':
            $produto->deletarProduto();
            break;
    
        default:
            echo json_encode(['erro' => 'Método não suportado']);
            break;
    }
