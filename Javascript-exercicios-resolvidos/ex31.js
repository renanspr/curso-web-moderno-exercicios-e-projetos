/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function calcularNegativo(vetor) {
    let negativos = vetor.filter(num => num < 0)
    let numNegativos = negativos.length
    return console.log(numNegativos)
}

calcularNegativo([-1, 10, -4, 8, -15])

