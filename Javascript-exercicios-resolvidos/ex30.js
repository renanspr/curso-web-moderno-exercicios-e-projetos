// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorMenor(vetor) {
    let maior = Math.max(...vetor)
    let menor = Math.min(...vetor)
    return [menor, maior]
}

console.log(maiorMenor([1, 2, 3, 4, 4576]))

