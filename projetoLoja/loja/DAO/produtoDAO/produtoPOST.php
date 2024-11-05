<?php

function inserir_produto($dados, $conexao)
{
    // Extraindo os dados do objeto
    $nome = $dados->Nome ?? null;
    $descricao = $dados->Descricao ?? null;
    $marca = $dados->Marca ?? null;
    $preco = $dados->Preco ?? null;
    $imagem = $dados->Imagem ?? null;

    // Preparação da consulta SQL
    $sql = "INSERT INTO Produtos (Nome, Descricao, Marca, Preco, Imagem) VALUES (?, ?, ?, ?, ?)";

    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("sssss", $nome, $descricao, $marca, $preco, $imagem);

    if ($stmt->execute()) {
        // Verifica se alguma linha foi realmente afetada
        return $stmt->affected_rows > 0 ? "Sucesso" : "Nenhuma alteração feita";
    } else {
        return "Falha: " . $stmt->error;
    }
}
