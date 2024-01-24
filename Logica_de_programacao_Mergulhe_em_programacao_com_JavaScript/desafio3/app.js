// Desafios

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador1 = 10;
while (contador1 >= 0) {
  console.log(contador1);
  contador1--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contador3 = prompt(
  "Digite um número maior que zero para a contagem regressiva: ",
);
while (contador3 >= 0) {
  console.log(contador3);
  contador3--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numero = prompt(
  "Digite um número maior que zero para a contagem progregressiva: ",
);
let contador4 = 0;
while (numero >= contador4) {
  console.log(contador4);
  contador4++;
}
