let cont = 0
let soma = 0

while(cont < 7){
    let number = Number(prompt("Digite um número:"))
    soma += number
    cont++
}

alert(`Soma total: ${soma}`)