/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
       aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
       aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
       "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function calcularMedia(nota1, nota2, nota3) {
    if (nota1 > nota2 && nota1 > nota3) {
        console.log(`Notas = ${nota1}, ${nota2}, ${nota3}`)
        media = ((nota1*4) + (nota2*3) + (nota3*3)) / 10
        return media
    } else if (nota2 > nota1 && nota2 > nota3) {
        console.log(`Notas = ${nota1}, ${nota2}, ${nota3}`)
        media = ((nota2*4) + (nota1*3) + (nota3*3)) / 10
        return media
    } else if (nota3 > nota1 && nota3 > nota2) {
        console.log(`Notas = ${nota1}, ${nota2}, ${nota3}`)
        media = ((nota3*4) + (nota1*3) + (nota2*3)) / 10
        return media
    }
}

function resultado(codigo) {
    if (media >= 5) {
        console.log(`Media = ${media}`)
        console.log(`Aluno = ${codigo}`)
        console.log(`APROVADO!!!!!`)
    } else {
        console.log(`Media = ${media}`)
        console.log(`Aluno = ${codigo}`)
        console.log(`REPROVADO!!!!!`)
    }
}


resultado(23, calcularMedia(6,8,9))
resultado(8, calcularMedia(4,7,3))
