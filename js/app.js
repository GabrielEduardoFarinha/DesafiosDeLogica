let totalCompras = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
  if (!produto) {
    alert('Por favor, selecione um produto.');
    return;
  }
  if (isNaN(quantidade) || quantidade <= 0) {
    
    return;
  }
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 

    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    totalCompras += preco;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalCompras}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalCompras = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
}
window.onload = function() {
    limpar();
  };