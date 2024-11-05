<?php
function alterar_parcial_cliente($conexao, $dados) {
    $id = $dados->ID;
    $campo = $dados->Campo;
    $valor = $dados->Valor;

    $campos_permitidos = ['Nome', 'Email', 'Telefone', 'Endereco']; 

    if (!in_array($campo, $campos_permitidos)) {
        return "Campo inválido";
    }

   
    $sql = "UPDATE Clientes SET $campo = ? WHERE ID = ?";

    $stmt = $conexao->prepare($sql);

    if ($stmt === false) {
        return "Erro ao preparar a consulta: " . $conexao->error;
    }

    $stmt->bind_param("si", $valor, $id);

    if ($stmt->execute()) {
      
        return ($stmt->affected_rows > 0) ? "Sucesso" : "Nenhuma alteração feita";
    } else {
        return "Falha: " . $stmt->error;
    }
}
