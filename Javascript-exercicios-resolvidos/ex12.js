// 12) Faça um algoritmo que calcule o fatorial de um número.

var fatorial = 1

function calcularFatorial(number) {
    if (number == 0) {
        return 1
    }
        for (var i = 1; i <= number; i++) {
            fatorial = fatorial*i
        }
   return fatorial
}

console.log(calcularFatorial(5))

