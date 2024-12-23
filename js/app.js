function alterarStatus(gameId) {
    const gameElement = document.getElementById(`game-${gameId}`);
    const button = gameElement.querySelector('.dashboard__item__button');
    const imgContainer = gameElement.querySelector('.dashboard__item__img');
  
    if (button.classList.contains('dashboard__item__button--return')) {
      button.textContent = 'Alugar';
      button.classList.remove('dashboard__item__button--return');
      imgContainer.classList.remove('dashboard__item__img--rented');
      alert("obrigado pela devolução,volte sempre!");
    } else {
      button.textContent = 'Devolver';
      button.classList.add('dashboard__item__button--return');
      imgContainer.classList.add('dashboard__item__img--rented');
      alert("o jogo foi alugado,lembre-se de devolver!");
    }
  }