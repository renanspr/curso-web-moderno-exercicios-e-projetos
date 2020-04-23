/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
       ou false.
*/

function divisivelPor3(number) {
    let resto = number % 3
    if (resto == 0) {
        return true
    } else {
        return false
      }
}

console.log(divisivelPor3(9))
console.log(divisivelPor3(20))
