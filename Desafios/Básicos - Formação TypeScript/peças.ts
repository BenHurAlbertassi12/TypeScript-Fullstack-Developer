/*
O código de uma peça 1
o número de peças 1
o valor unitário de cada peça 1

O código de uma peça 2
o número de peças 2
o valor unitário de cada peça 2.

calcule e mostre o valor a ser pago.
*/

const valores1 = gets().split(' ');
const valores2 = gets().split(' ');

const codigo1 = parseInt(valores1[0]);
const numero1 = parseInt(valores1[1]);
const valorUnitario1 = parseFloat(valores1[2]);

const codigo2 = parseInt(valores2[0]);
const numero2 = parseInt(valores2[1]);
const valorUnitario2 = parseFloat(valores2[2]);

// Cálculo do valor total a pagar da compra
const valorTotal = numero1 * valorUnitario1 + numero2 * valorUnitario2;

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);
