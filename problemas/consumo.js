// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

// Entrada
// O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total 
// percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

// Saída
// Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".

const prompt = require('prompt-sync')();

const x = Number(prompt('Digite o total percorridos em km: '))
const y = Number(prompt('Digite o total de combustivel em litros: '))

const consumoMedio = x / y;

console.log(`CONSUMO = ${consumoMedio.toFixed(3)} km/l`)