<?php
function alterar_produto($conexao, $dados) {
    // Extrai os dados
    $id = $dados->ID;
    $nome = $dados->Nome;
    $descricao = $dados->Descricao;
    $marca = $dados->Marca;
    $preco = $dados->Preco;
    $imagem = $dados->Imagem; // Novo campo de Imagem

    // SQL para atualizar o produto, incluindo a imagem
    $sql = "UPDATE Produtos SET 
                Nome = ?,
                Descricao = ?,
                Marca = ?,
                Preco = ?,
                Imagem = ?  -- Adiciona a imagem na query
            WHERE ID = ?";

    $stmt = $conexao->prepare($sql);
    
    // Verifica se a preparação foi bem-sucedida
    if (!$stmt) {
        return "Falha na preparação: " . $conexao->error;
    }

    // Vincula os parâmetros, incluindo a imagem
    $stmt->bind_param("sssdsi", $nome, $descricao, $marca, $preco, $imagem, $id);

    // Executa a declaração
    if ($stmt->execute()) {
        // Verifica se alguma linha foi realmente afetada
        return ($stmt->affected_rows > 0) ? "Sucesso" : "Nenhuma alteração feita";
    } else {
        return "Falha ao executar: " . $stmt->error;
    }
}
?>
