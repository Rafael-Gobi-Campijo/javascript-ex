/*
Exercício 6
Faça um programa que leia um número e diga se ele é PAR ou ÍMPAR.
*/

let number = Number(prompt('Digite um número:'))
if (number % 2 == 0) {
    alert('O número digitado é par.')
} else {
    alert('O número digitado é ímpar.')
}