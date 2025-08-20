/*
Exercício 8
Faça um programa que leia um número do usuário e faça uma contagem regressiva até zero.
Mostre cada número no console e, ao final, exiba uma mensagem de celebração.
*/

let txtn = document.getElementById("res")
let num = Number(prompt('Digite um número para começar a contagem regressiva:'))

while (num >= 0){
    res.innerHTML += num + "<br>"
    num--
}

res.innerHTML += 'Chegamos ao zero.'