/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
      primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
      retornará o valor da aplicação sob o regime de juros compostos.
*/

function montanteJurosSimples(capitalInicial, taxaDeJuros, tempo) {
    return jurosSimples = capitalInicial*taxaDeJuros*tempo
}

function montanteJurosCompostos(capitalInicial, taxaDeJuros, tempo) {
    return jurosCompostos = capitalInicial*(1 + taxaDeJuros)**tempo
}

console.log(montanteJurosSimples(1000, 0.1, 12))
console.log(montanteJurosCompostos(1000, 0.1, 12))
