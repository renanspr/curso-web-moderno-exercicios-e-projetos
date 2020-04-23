/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/


function multiplica(vetor, num) {
    let resultadoMulti = vetor.map(elemento => elemento*num)
    return resultadoMulti
}

function multiplicaMaior5(vetor, num) {
    let resultadoMultiMaior5 = vetor.filter(elemento => elemento > 5).map(elemento => elemento*num)
    return resultadoMultiMaior5
}

console.log(multiplica([1, 2, 3, 4, 5], 2))
console.log(multiplicaMaior5([1, 2, 3, 4, 5, 6], 2))