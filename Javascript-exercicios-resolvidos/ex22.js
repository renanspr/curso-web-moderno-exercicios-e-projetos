/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
       parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
       anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
       compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function calcularAnuidade(mes, valor) {
    const anuidade = valor*(1 + 0.05)**(mes - 1)
    return anuidade.toFixed(2)
}

console.log(calcularAnuidade(1, 1000))
console.log(calcularAnuidade(2, 1000))
console.log(calcularAnuidade(3, 1000))
console.log(calcularAnuidade(4, 1000))
console.log(calcularAnuidade(5, 1000))
console.log(calcularAnuidade(6, 1000))
console.log(calcularAnuidade(7, 1000))
console.log(calcularAnuidade(8, 1000))
console.log(calcularAnuidade(9, 1000))
console.log(calcularAnuidade(10, 1000))
console.log(calcularAnuidade(11, 1000))

