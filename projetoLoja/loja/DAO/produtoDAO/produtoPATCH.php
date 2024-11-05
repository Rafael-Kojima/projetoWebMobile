<?php 
function alterar_parcial_produto($conexao, $dados) {
    $id = $dados->ID ?? null;
    $campo = $dados->Campo ?? null;
    $valor = $dados->Valor ?? null;

    // Adicione a imagem ao array de campos permitidos
    $campos_permitidos = ['Nome', 'Descricao', 'Marca', 'Preco', 'Imagem'];

    // Verifica se o campo é permitido
    if (!in_array($campo, $campos_permitidos)) {
        return "Campo inválido";
    }

    // Prepara a query SQL com o campo dinâmico
    $sql = "UPDATE Produtos SET $campo = ? WHERE ID = ?";

    // Prepara a execução
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("si", $valor, $id);

    // Executa a query e retorna a resposta
    if ($stmt->execute()) {
        return ($stmt->affected_rows > 0) ? "Sucesso" : "Nenhuma alteração feita";
    } else {
        return "Falha: " . $stmt->error;
    }
}
