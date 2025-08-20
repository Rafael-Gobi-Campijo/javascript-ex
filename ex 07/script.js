/*
Exercício 7
Peça dois números e mostre qual é o maior.
*/

let num1 = Number(prompt('Digite um número:'))
let num2 = Number(prompt('Digite outro número:'))

if (num1 > num2){
    alert(`O maior número é: ${num1}.`)
} else if (num2 > num1){
    alert(`O maior número é: ${num2}.`)
} else{
    alert(`Os números são iguais.`)
}