// Desafios

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoIMC(altura, peso) {
  let resultadoImc = (peso / (altura * altura)).toFixed(2);
  console.log(resultadoImc);
}
calculoIMC(1.6, 60);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
  if (numero < 0) {
    return "O fatorial não está definido para números negativos.";
  } else if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

let numeroParaCalcularFatorial = parseInt(
  prompt("Escolha um número para calcular seu fatorial"),
);

if (isNaN(numeroParaCalcularFatorial)) {
  console.log("Por favor, insira um número válido.");
} else {
  let resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);
  console.log(
    `O fatorial de ${numeroParaCalcularFatorial} é ${resultadoFatorial}`,
  );
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
