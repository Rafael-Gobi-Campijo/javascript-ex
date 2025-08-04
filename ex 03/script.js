var span = window.document.getElementById('span')

var vitorias = prompt('Quantas vezes seu time ganhou?')
var empates = prompt('Quantas vezes seu time empatou?')
var derrotas = prompt('Quantas vezes seu time perdeu?')

var pontuacao = (vitorias * 3) + (empates * 1)

alert(`A pontuação do seu time foi ${pontuacao} pontos.`)