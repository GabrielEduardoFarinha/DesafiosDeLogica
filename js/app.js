function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value); 
    comprarIngresso(tipo, qtd);
}

function comprarIngresso(tipo, qtd) {
    let estoqueElemento = document.getElementById(`qtd-${tipo}`); 
    let estoqueAtual = parseInt(estoqueElemento.textContent); 
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
    } else if (qtd > estoqueAtual) {
        alert('Quantidade indisponível para venda');
    } else {
        estoqueAtual -= qtd; 
        estoqueElemento.textContent = estoqueAtual; 
        alert('Compra realizada'); 
    }
}
