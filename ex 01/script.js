var span = window.document.getElementById('span')
var num1 = parseInt(prompt('Digite sua primeira nota.'))
var num2 = parseInt(prompt('Digite sua segunda nota.'))
var nota = (num1 + num2) / 2

if (nota >= 7) {
    alert('Você foi aprovado!')
} else {
    alert('Você foi reprovado!')
}