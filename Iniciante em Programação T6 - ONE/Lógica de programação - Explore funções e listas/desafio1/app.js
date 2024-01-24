// Desafios

// Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
// https://github.com/alura-cursos/js-curso-2/tree/desafio_1

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsoleClicado() {
  console.log("O botão foi clicado");
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function exibirAlerta() {
  alert("Eu amo JS");
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPromptClicado() {
  let nomeCidade = prompt("Digite o nome de uma cidade do Brasil:");
  alert(`Estive em ${nomeCidade} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function soma() {
  let numero1 = parseFloat(prompt("Digite um número qualquer"));
  let numero2 = parseFloat(prompt("Digite outro número qualquer"));
  let resultado = numero1 + numero2;
  alert(`${numero1} + ${numero2} = ${resultado}`);
}
