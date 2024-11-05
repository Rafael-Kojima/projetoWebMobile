<?php
function deletar_clientes($conexao, $id) {
    
    $sql = "DELETE FROM Clientes WHERE ID = ?";

    $stmt = $conexao->prepare($sql);

    if ($stmt === false) {
        return "Erro ao preparar a consulta: " . $conexao->error;
    }

    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        return ($stmt->affected_rows > 0) ? "Sucesso" : "Nenhuma alteração feita";
    } else {
        return "Falha: " . $stmt->error;
    }
}
