document.addEventListener('DOMContentLoaded', function () {
    function carregarModal() {
        fetch('modal.html')
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('beforeend', data); 

                document.getElementById('closeModal').onclick = function () {
                    document.getElementById('editModal').style.display = 'none';
                };

                window.onclick = function (event) {
                    if (event.target == document.getElementById('editModal')) {
                        document.getElementById('editModal').style.display = 'none';
                    }
                };
            })
            .catch(error => console.error('Erro ao carregar o modal:', error));
    }

    carregarModal();

    document.querySelector('.section_produtos').addEventListener('click', function (e) {
        if (e.target.classList.contains('icone_editar')) {
            const id = e.target.getAttribute('data-id');
            const nome = e.target.closest('.card_produto').querySelector('.nome_produto').textContent;
            const marca = e.target.closest('.card_produto').querySelector('.marca_produto').textContent;
            const preco = e.target.closest('.card_produto').querySelector('.preco_produto').textContent;
            const descricao = e.target.closest('.card_produto').querySelector('.descricao_produto').textContent;
            const imagem = e.target.closest('.card_produto').querySelector('.imagem_produto').src; 

            document.getElementById('nome').value = nome;
            document.getElementById('marca').value = marca;
            document.getElementById('preco').value = preco;
            document.getElementById('descricao').value = descricao; 
            document.getElementById('imagem').value = imagem; 
            document.getElementById('produtoId').value = id;

            document.getElementById('editModal').style.display = 'block';
        }
    });

    document.addEventListener('submit', function (e) {
        e.preventDefault();

        let id = document.getElementById('produtoId').value;
        let nome = document.getElementById('nome').value;
        let marca = document.getElementById('marca').value;
        let preco = document.getElementById('preco').value;
        let descricao = document.getElementById('descricao').value;
        let imagem = document.getElementById('imagem').value; 

        console.log('URL da imagem capturada:', imagem);

        fetch(`http://localhost/projetoLoja/loja/controller/produto.php`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ID: id,
                Nome: nome,
                Marca: marca,
                Preco: preco,
                Descricao: descricao, 
                Imagem: imagem  
            })
        })
        .then(response => response.text())
        .then(data => {
            console.log('Resposta do servidor:', data);
            if (data.includes('Sucesso')) {
                alert('Produto atualizado com sucesso!');
                document.getElementById('editModal').style.display = 'none';
                location.reload(); 
            } else {
                alert('Erro ao atualizar o produto.');
            }
        })
        .catch(error => console.error('Erro:', error));
    });
});
