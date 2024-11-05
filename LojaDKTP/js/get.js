let sectionProdutos = document.querySelector(".section_produtos");

function mostrarProdutos(produtos) {
    produtos.forEach((produto) => {
        sectionProdutos.innerHTML += `  
            <div class="card_produto">
                <div class="imagem_produto">
                    <img src="${produto.Imagem}" class="imagem_produto" alt="imagem produto">
                </div>
                <div class="infos_produto">
                    <h3 class="nome_produto">${produto.Nome}</h3>
                    <p class="marca_produto">${produto.Marca}</p>
                    <p class="descricao_produto">${produto.Descricao}</p>
                    <p class="preco_produto">${produto.Preco}</p>
                    <button class="btn_comprar">Comprar</button>
                </div>
                <div class="icones_produto">
                    <i class="fas fa-edit icone_editar" data-id="${produto.ID}"></i>
                    <i class="fas fa-trash icone_deletar" data-id="${produto.ID}"></i>
                </div>
            </div>
        `;
    });
}

fetch("http://localhost/projetoLoja/loja/controller/produto.php")
    .then((res) => res.json())
    .then((json) => {
        var data = json;
        console.log(data);
        mostrarProdutos(data);
    });