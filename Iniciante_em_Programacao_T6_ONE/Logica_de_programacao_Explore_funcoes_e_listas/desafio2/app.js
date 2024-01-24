// Desafios

// Criar uma função que exibe "Olá, mundo!" no console.
function saudacao() {
  console.log("Olá, mundo!");
}
saudacao();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
  console.log(`Olá, ${nome}!`);
}
exibirNome("Bárbara");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exibirNumeroDobrado(numero) {
  console.log(numero * 2);
}
exibirNumeroDobrado(2);
// _________________________________
function calcularDobro(numero) {
  return numero * 2;
}
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1, num2, num3) {
  console.log((num1 + num2 + num3) / arguments.length);
}
calcularMedia(2, 5, 8);
// _________________________________
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}
let media = calcularMedia(4, 7, 10);
console.log(media);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function exibirMaiorNumero(num1, num2) {
  console.log(num1 > num2 ? num1 : num2);
}
exibirMaiorNumero(5, 7);
// _________________________________
function encontrarMaior(a, b) {
  return a > b ? a : b;
}
let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicaNumero(numero) {
  console.log(numero * numero);
}
multiplicaNumero(5);
// _________________________________
function quadrado(numero) {
  return numero * numero;
}
let resultado = quadrado(2);
console.log(resultado);
