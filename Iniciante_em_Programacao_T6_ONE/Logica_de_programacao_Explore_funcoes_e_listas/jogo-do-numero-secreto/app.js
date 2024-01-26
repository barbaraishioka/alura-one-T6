// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let tagInput = document.querySelector(".container__input");
tagInput.max = numeroMaximo;

let reiniciarBtn = document.querySelector("#reiniciar");
let chutarBtn = document.querySelector("#chutar");
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroMaximo}`);
  tagInput.focus();
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;

  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.4 });
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);

  if (listaDeNumerosSorteados.length === numeroMaximo) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo(campo) {
  campo.value = "";
}

function keyDown(elemento, executarFuncao) {
  elemento.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      executarFuncao();
    }
  });
}

keyDown(tagInput, verificarChute);
keyDown(reiniciarBtn, reiniciarJogo);

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo(tagInput);
  tentativas = 1;
  exibirMensagemInicial();
  chutarBtn.removeAttribute("disabled");
  reiniciarBtn.setAttribute("disabled", "true");
}

function verificarChute() {
  validarChute();
  let chute = parseInt(tagInput.value);
  if (chute === numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagem = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} 👏👏👏`;

    exibirTextoNaTela("h1", "Parabéns, acertou!!!");
    exibirTextoNaTela("p", `${mensagem}`);

    chutarBtn.setAttribute("disabled", "true");
    reiniciarBtn.removeAttribute("disabled");

    tagInput.setAttribute("disabled", "true");
    setTimeout(reiniciarJogo, 3000);
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
  } else if (chute < numeroSecreto && chute > 0) {
    exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
  }

  tentativas++;
  limparCampo(tagInput);
  tagInput.removeAttribute("disabled");
}

function validarChute() {
  let chute = parseInt(tagInput.value);
  if (
    chute == 0 ||
    chute == null ||
    chute < 0 ||
    chute > numeroMaximo ||
    Number.isNaN(chute) ||
    chute == undefined ||
    chute == false
  ) {
    alert("Digite um número válido.");
    if (tentativas >= 1) {
      tentativas--;
    } else if (tentativas < 1) {
      tentativas++;
    }
  }
}
