let compra = Number(prompt("Digite o valor da compra:"))
let imp10 = compra + (compra * 10 / 100)
let imp15 = compra + (compra * 15 / 100)
let imp20 = compra + (compra * 20 / 100)
if (compra < 1200) {
    alert("Você está isendo do imposto.")
} else if (compra < 5000) {
    alert(`Você pagará 10% de imposto. Total: R$${imp10}`)
} else if (compra < 10000) {
    alert(`Você pagará 15% de imposto. Total: R$${imp15}`)
} else {
    alert(`Você pagará 20% de imposto. Total: R$${imp20}`)
}