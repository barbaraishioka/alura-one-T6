// Desafios

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoIMC(altura, peso) {
  if (
    isNaN(altura) ||
    isNaN(peso) ||
    altura <= 0 ||
    peso <= 0 ||
    altura === "" ||
    peso === ""
  ) {
    throw new Error(
      "Altura e peso devem ser números positivos e maiores que zero.",
    );
  } else {
    let calculoIMC = (peso / (altura * altura)).toFixed(2);
    return `O seu IMC é: ${calculoIMC}`;
  }
}

let altura = parseFloat(
  prompt("Insira sua altura em metros: (Ex.: 1.60)").replace(",", "."),
);
let peso = parseFloat(
  prompt("Insira seu peso em kg: (Ex.: 60.0)").replace(",", "."),
);
calculoIMC(altura, peso);

// ___________________________________________________________________________________
// ___________________________________________________________________________________

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
  if (
    isNaN(numero) ||
    numero < 0 ||
    numero === null ||
    numero === undefined ||
    numero === ""
  ) {
    throw new Error(
      "Por favor, insira um valor válido. Apenas números inteiros não negativos são permitidos.",
    );
  }

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

try {
  const numero = parseInt(
    prompt("Digite um número para calcular o fatorial: "),
  );
  console.log(`O fatorial de ${numero} é ${calcularFatorial(numero)}`);
} catch (error) {
  console.error(error.message);
}

// ___________________________________________________________________________________
// ___________________________________________________________________________________

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarEmReais(valorEmDolar) {
  const cotacaoDoDolar = 4.8;
  const valorEmReais = valorEmDolar * cotacaoDoDolar;
  return valorEmReais;
}

const valorEmDolar = parseFloat(
  prompt(
    "Insira o valor em dólar que deseja converter para reais: (Ex.: 2 ou 2.02)",
  ),
);

if (isNaN(valorEmDolar) || valorEmDolar === "") {
  throw new Error("Insira um valor válido. Apenas números são permitidos");
}

const valorEmReais = converterDolarEmReais(valorEmDolar);
console.log(
  `$${valorEmDolar.toFixed(2)} equivalem a R$${valorEmReais.toFixed(2)}`,
);

// ___________________________________________________________________________________
// ___________________________________________________________________________________

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function perimetroRetangulo(altura, largura) {
  return (altura + largura) * 2;
}

function areaRetangulo(altura, largura) {
  return largura * altura;
}

const alturaRetangulo = parseFloat(
  prompt("Insira a altura em centímetros. Ex.: 100.2").replace(",", "."),
);
const larguraRetangulo = parseFloat(
  prompt("Insira a largura em centímetros. Ex.: 100.2").replace(",", "."),
);

if (
  isNaN(alturaRetangulo) ||
  alturaRetangulo === "" ||
  isNaN(larguraRetangulo) ||
  larguraRetangulo === "" ||
  alturaRetangulo <= 0 ||
  larguraRetangulo <= 0
) {
  throw new Error("Insira um valor válido. Apenas números são permitidos");
} else {
  let resultadoPerimetro = perimetroRetangulo(
    alturaRetangulo,
    larguraRetangulo,
  );
  console.log("O perímetro do retângulo é: " + resultadoPerimetro + " cm.");

  let resultadoArea = areaRetangulo(alturaRetangulo, larguraRetangulo);
  console.log("A área do retângulo é: " + resultadoArea + " cm².");
}

// ___________________________________________________________________________________
// ___________________________________________________________________________________

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function perimetroCirculo(raio) {
  return 2 * Math.PI * raio;
}

function areaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}

const raio = parseFloat(
  prompt("Insira o valor do raio em centímetros. Ex.: 2 ou 2.00").replace(
    ",",
    ".",
  ),
);

if (isNaN(raio) || raio === "" || raio <= 0) {
  throw new Error(
    "Insira um valor válido para o raio. Apenas números acima de zero são permitidos",
  );
} else {
  const perimetro = perimetroCirculo(raio).toFixed(2);
  console.log(`O perimetro de um circulo de raio ${raio}cm é ${perimetro}cm`);
  const area = areaCirculo(raio).toFixed(2);
  console.log(`A área de um circulo de raio ${raio}cm é ${area}cm²`);
}

// ___________________________________________________________________________________
// ___________________________________________________________________________________

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

const numero = prompt("Insira um número para o cálculo da tabuada:");

if (isNaN(numero) || numero === "") {
  throw new Error("Insira um valor válido. Apenas números são permitidos");
} else {
  mostrarTabuada(numero);
}
