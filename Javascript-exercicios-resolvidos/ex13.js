/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function calcularDia(dia) {
    switch (dia) {
        case 2: case 3: case 4: case 5: case 6:
           console.log("Dia útil")
           break
        case 1: case 7: 
           console.log("Fim de semana")
           break
        default : 
           console.log("Dia inválido")
    }
}

calcularDia(1)
calcularDia(2)
calcularDia(3)
calcularDia(4)
calcularDia(5)
calcularDia(6)
calcularDia(7)
calcularDia('a')

    