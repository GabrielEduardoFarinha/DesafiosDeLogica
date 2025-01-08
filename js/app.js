const amigos = [];

function adicionar() {
  const input = document.getElementById("nome-amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  if (amigos.includes(nome)) {
    alert(`O nome '${nome}' já foi adicionado. Por favor, adicione um sobrenome para diferenciar.`);
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("lista-amigos");
  listaAmigos.innerHTML = amigos.join(", ");
}

function sortear() {
  if (amigos.length % 2 !== 0) {
    alert("O número de participantes é ímpar. Adicione mais uma pessoa para continuar.");
    return;
  }

  const numeros = [];

  // Gerar números aleatórios únicos para os amigos
  while (numeros.length < amigos.length) {
    const numero = Math.floor(Math.random() * amigos.length);
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  // Formar os pares
  const pares = [];
  for (let i = 0; i < numeros.length; i += 2) {
    const amigo1 = amigos[numeros[i]];
    const amigo2 = amigos[numeros[i + 1]];
    pares.push(`${amigo1} e ${amigo2}`);
  }

  exibirSorteio(pares);
}

function exibirSorteio(pares) {
  const listaSorteio = document.getElementById("lista-sorteio");
  listaSorteio.innerHTML = pares.join("<br>");
}

function reiniciar() {
  amigos.length = 0;
  atualizarListaAmigos();
  const listaSorteio = document.getElementById("lista-sorteio");
  listaSorteio.innerHTML = "";
}
