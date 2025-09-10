let cont = 0
let ma20 = 0
let me20 = 0

while(cont < 10){
    let number = Number(prompt("Digite um número:"))
    if (number > 20){
        ma20 += 1
    }else {
        me20 += 1
    }
    cont++
}
alert(`Maiores que 20: ${ma20} | Menores que 20: ${me20}`)