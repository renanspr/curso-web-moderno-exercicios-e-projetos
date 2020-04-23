/* 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function imprimirImpares(inicio = 0, fim = 100) {
    let intervalo = []
    if (inicio < fim) {
        for (inicio; inicio <= fim; inicio++) {
            intervalo.push(inicio)
        }
    let impares = intervalo.filter(elemento => elemento % 2 == 1)
    return impares
    } if (inicio > fim) {
        for (fim; fim <= inicio; fim++) {
            intervalo.push(fim)
        }
    let impares = intervalo.filter(elemento => elemento % 2 == 1)
    return impares
    }
}

console.log(imprimirImpares(1, 10))
console.log(imprimirImpares(13, 6))
console.log(imprimirImpares())