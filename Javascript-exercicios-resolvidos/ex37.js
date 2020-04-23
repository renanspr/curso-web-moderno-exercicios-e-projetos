/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
       como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
       bem como a soma dos elementos.
*/

function mostrarPA(n, a1, r) {
    var PA = []
    for (let i = 1; i <= n; i++) {
        let an = a1 + (i - 1)*r
        PA.push(an)
    }
    let soma = PA.reduce((a, b) => a + b)
    console.log(PA)
    return `Soma = ${soma}`
}

function mostrarPG(n, a1, r) {
    var PG = []
    for (let i = 1; i <= n; i++) {
        let an = a1*r**(i - 1)
        PG.push(an)
    }
    let soma = PG.reduce((a, b) => a + b)
    console.log(PG)
    return `Soma = ${soma}`
}

console.log(mostrarPA(5, 0, 2))
console.log(mostrarPG(6, 1, 2))