// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function calcular(numeros) {
    const numerospares = numeros.filter(num => num % 2 == 0)
    const numerosimpares = numeros.filter(num => num % 2 == 1)
    console.log(`Pares: ${numerospares.length}`)
    console.log(`Impares: ${numerosimpares.length}`)
}

calcular([1,2,3,4,5,6,7,8,9,10])

