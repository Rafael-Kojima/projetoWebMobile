document.getElementById('patchForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let id = document.getElementById('produto-id').value;
    let campo = document.getElementById('nome-campo').value; 
    let valor = document.getElementById('edicao').value;

    fetch(`http://localhost/projetoLoja/loja/controller/produto.php`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ID: id,
            Campo: campo,
            Valor: valor
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log('Resposta do servidor:', data);  
        if (data.includes('Sucesso')) {
            alert('Produto atualizado com sucesso!');
            location.reload(); 
        } else {
            alert('Erro ao atualizar o produto: ' + data);
        }
    })
    .catch(error => console.error('Erro:', error));
});
