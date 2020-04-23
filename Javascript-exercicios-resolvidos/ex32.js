// 32)  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcularMedia(vetor) {
    let soma = vetor.reduce((a, b) => a + b, 0)
    let media = soma / vetor.length
    return media
}

console.log(calcularMedia([7, 8, 9, 6]))