var span = window.document.getElementById('span')
var txt = prompt('Escreva um horário.')

if (txt >= 0 && txt < 6) {
    alert('Boa madrugada!')
} else if (txt >= 6 && txt <= 12) {
    alert('Bom dia!')
} else if (txt > 12 && txt <=18 ) {
    alert('Boa tarde!')
} else {
    alert('Boa noite!')
}