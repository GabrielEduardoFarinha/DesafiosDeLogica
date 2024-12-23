function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let fromNumber = parseInt(document.getElementById('de').value);
    let toNumber = parseInt(document.getElementById('ate').value);


    let sorteados =[];
    let numero;

    for(let i = 0; i< quantidadeDeNumeros; i++){
        numero = numeroAleatorio(fromNumber, toNumber);

        while(sorteados.includes(numero)) {
            numero = numeroAleatorio(fromNumber, toNumber);
        }
        sorteados.push(numero);
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarBotao();

}
function numeroAleatorio(min, max){
    return parseInt(Math.random() * (max - min + 1) + min);
}


function alterarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
    
}
function reiniciar(){
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        alterarStatusBotao();
}

    
    