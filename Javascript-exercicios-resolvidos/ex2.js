/* 02)  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
        Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
        Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
        ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
        triângulo).
*/

function existenciaTriangulo(a,b,c) {
       if (a < b + c && b < a + c && c < a + b) {
          return "O triângulo existe!"
       } else { 
          return "O triângulo não existe!"    
       }
}

function classificarTriangulo(a,b,c) {
       if (a == b && a == c && b == c) {
          return "O triângulo é equilátero!"
       } if (a != b && a != c && b != c) {
            return "O triângulo é escaleno!"
         } else {
                return "O triângulo é isósceles!"
         }
}

console.log(existenciaTriangulo(3, 4, 5))
console.log(classificarTriangulo(3, 4, 5))

