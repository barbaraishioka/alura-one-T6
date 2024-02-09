// Desafios finais

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Seja bem vindo!");

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Bárbara";
console.log(`Olá, ${nome}!`);

// Crie uma variável chamada "nome1" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome1 = "Bárbara";
alert(`Olá, ${nome}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let resposta = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(resposta);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 2;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Crie uma variável chamada "valor3" e outra chamada "valor4", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado2". Utilize o console.log para mostrar a mensagem "A diferença entre [valor3] e [valor4] é igual a [resultado]." no console.
let valor3 = 10;
let valor4 = 4;
let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Insira sua idade:");
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = parseFloat(prompt("Digite um número:"));
if (numero > 0) {
  console.log("Número positivo");
} else if (numero < 0) {
  console.log("Número negativo");
} else {
  console.log("Número é o zero");
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let numero1 = 1;
while (numero1 <= 10) {
  console.log(numero1);
  numero1++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 6;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio1);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleatorio2 = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio2);
