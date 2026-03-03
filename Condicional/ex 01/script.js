function calcular () {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let operacao = document.getElementById('operacao').value // Depende da escolha do usuário.
    let res = document.getElementById('resultado')

    if (num1.value.length === 0 || num2.value.length === 0) {
        res.innerHTML = 'Operação inválida, digite números válidos.'
        return
    }

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    let resultado
    switch (operacao) {
        case "+":
            resultado = n1 + n2
            break
        case "-":
            resultado = n1 - n2
            break
        case "*":
            resultado = n1 * n2
            break
        case "/": 
            if (n2 === 0) {
                res.innerHTML = 'Operação inválida!'
                return
            } else {
                resultado = n1 / n2
            }
            break
        default: 
            res.innerHTML = 'Operação inválida!'
    }
        res.innerHTML = `Resultado: ${resultado}`
}