<?php

 function pegar_produto($conexao) {
     $sql = "SELECT * FROM Produtos";
     $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar");

     $produtos = [];

     while ($registro = mysqli_fetch_assoc($res)) {
         $produto = [
             'ID' => utf8_encode($registro['ID']),
             'Nome' => utf8_encode($registro['Nome']),
             'Descricao' => utf8_encode($registro['Descricao']),
             'Marca' => utf8_encode($registro['Marca']),
             'Preco' => utf8_encode($registro['Preco']),
             'Imagem' => utf8_encode($registro['Imagem'])
         ];

         $produtos[] = $produto;
     }

     fecharConexao($conexao);
     return $produtos;
 }