<?php

function inserir_cliente($dados, $conexao) {
    // Extração dos dados recebidos
    $nome = $dados->Nome;
    $endereco = $dados->Endereco;
    $cpf = $dados->CPF;
    $telefone = $dados->Telefone;
    $email = $dados->Email;
    $dataNascimento = $dados->DataNascimento;

    // SQL para inserir os dados
    $sql = "INSERT INTO Clientes (Nome, Endereco, CPF, Telefone, Email, DataNascimento) VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conexao->prepare($sql);

    if ($stmt === false) {
        return "Erro ao preparar a consulta: " . $conexao->error;
    }

    $stmt->bind_param("ssssss", $nome, $endereco, $cpf, $telefone, $email, $dataNascimento);

    if ($stmt->execute()) {
        
        return ($stmt->affected_rows > 0) ? "Sucesso" : "Nenhuma alteração feita";
    } else {
        return "Falha: " . $stmt->error;
    }
}
