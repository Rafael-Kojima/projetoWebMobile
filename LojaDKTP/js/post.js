function novoProduto() {
    let nomeProduto = document.getElementById("nome-produto");
    let preco = document.getElementById("preco");
    let descricao = document.getElementById("descricao-produto");
    let imagem = document.getElementById("imagem");
    let marca = document.getElementById("marca");
  
    fetch("http://localhost/projetoLoja/loja/controller/produto.php", {
      method: "POST",
      body: JSON.stringify({
        Nome: nomeProduto.value,
        Preco: preco.value,
        Descricao: descricao.value,
        Marca: marca.value,
        Imagem: imagem.value
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }
  
  let btnAddProduto = document.querySelector(".btn_addProduto");
  btnAddProduto.addEventListener("click", (event) => {
    event.preventDefault();
    novoProduto();
    alert("O produto foi adicionado")
  });
