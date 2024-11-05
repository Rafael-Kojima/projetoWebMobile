<?php
function alterar_cliente($conexao, $dados) {

    $id = $dados->ID;
    $nome = $dados->Nome;
    $endereco = $dados->Endereco;
    $cpf = $dados->CPF;
    $telefone = $dados->Telefone;
    $email = $dados->Email;
    $dataNascimento = $dados->DataNascimento;

    if (!is_numeric($id)) {
        return "ID inválido.";
    }

    if (empty($nome) || empty($endereco) || empty($cpf) || empty($telefone) || empty($email) || empty($dataNascimento)) {
        return "Erro: Campos obrigatórios não podem estar vazios.";
    }

    $sql = "UPDATE Clientes SET 
                Nome = ?, 
                Endereco = ?, 
                CPF = ?, 
                Telefone = ?, 
                Email = ?, 
                DataNascimento = ? 
            WHERE ID = ?";

    if ($stmt = $conexao->prepare($sql)) {
      
        $stmt->bind_param("ssssssi", $nome, $endereco, $cpf, $telefone, $email, $dataNascimento, $id);

  
        if ($stmt->execute()) {
          
            if ($stmt->affected_rows > 0) {
                return "Sucesso";
            } else {
                return "Nenhuma alteração feita ou ID inexistente.";
            }
        } else {

            return "Erro ao executar a atualização: " . $stmt->error;
        }
    } else {

        return "Erro na preparação da consulta: " . $conexao->error;
    }
}
