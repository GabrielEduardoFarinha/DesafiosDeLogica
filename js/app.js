function alterarStatus(gameId) {
    const gameElement = document.getElementById(`game-${gameId}`);
    const button = gameElement.querySelector('.dashboard__item__button');
    const imgContainer = gameElement.querySelector('.dashboard__item__img');

    if (button.classList.contains('dashboard__item__button--return')) {
        const confirmar = confirm("Tem certeza que deseja devolver o jogo?");
        if (confirmar) {
            button.textContent = 'Alugar';
            button.classList.remove('dashboard__item__button--return');
            imgContainer.classList.remove('dashboard__item__img--rented');
            alert("Obrigado pela devolução, volte sempre!");
        }
    } else {
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        imgContainer.classList.add('dashboard__item__img--rented');
        alert("O jogo foi alugado, lembre-se de devolver!");
    }

    contarJogosAlugados();
}

function contarJogosAlugados() {
    const alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Jogos alugados: ${alugados}`);
}

function ehPalindromo(texto) {
    const textoLimpo = texto.toLowerCase().replace(/[\W_]/g, '');
    const textoInvertido = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoInvertido;
}

function ordenarNumeros(a, b, c) {
    const numeros = [a, b, c];
    return numeros.sort((x, y) => x - y);
}

// Testando a função de palíndromo
console.log(ehPalindromo("A man a plane and God")); // true
console.log(ehPalindromo("Hello")); // false

// Testando a função de ordenação
console.log(ordenarNumeros(45, 12, 78)); // [12, 45, 78]
console.log(ordenarNumeros(5, 3, 8)); // [3, 5, 8]
