let txtt = Number(prompt("Digite sua temperatura local:"))

if (txtt <= 15){
    alert('Está um clima frio.')
} else if (txtt >= 18 && txtt <= 25){
    alert('Está um clima agradável.')
} else if (txtt >= 26 && txtt <= 32){
    alert('Está um clima quente.')
} else {
    alert('Está um clima muito quente.')
}