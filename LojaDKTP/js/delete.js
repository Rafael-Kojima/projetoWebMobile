setTimeout(() => {
    const botoesDeletar = document.querySelectorAll('.icone_deletar');

    botoesDeletar.forEach((btn) => {
        btn.addEventListener('click', (evento) => {
            const cardProduto = evento.target.closest('.card_produto');
            const idProduto = evento.target.getAttribute('data-id');                  

            if (cardProduto && idProduto) {
                console.log("ID do produto a ser deletado:", idProduto);

                // Realiza a requisição DELETE com o id do produto
                fetch(`http://localhost/projetoLoja/loja/controller/produto.php`, {
                    method: "DELETE",
                    body: JSON.stringify({
                        "ID": idProduto
                    })
                })
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                    cardProduto.remove();
                })
                .catch((erro) => console.error('Erro ao deletar o produto:', erro));
            }
        });
    });
}, 100);