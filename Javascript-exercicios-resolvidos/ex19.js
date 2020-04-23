/* 19) O cardápio de uma lanchonete é o seguinte:
Código | Descrição do Produto | Preço
   100 | Cachorro Quente      | R$ 3,00
   200 | Hambúrguer Simples   | R$ 4,00
   300 | Cheeseburguer        | R$ 5,50
   400 | Bauru                | R$ 7,50
   500 | Refrigerante         | R$ 3,50
   600 | Suco                 | R$ 2,80
 Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function calcularPedido(codigo, quantidade) {
   switch(codigo) {
      case 100:
         console.log(`${quantidade} Cachorro(s) Quente(s) = R$ ${quantidade*3.00}`)
         break
      case 200:
         console.log(`${quantidade} Hambúrguer(s) Simples = R$ ${quantidade*4.00}`)
         break
      case 300:
         console.log(`${quantidade} Cheeseburguer(s) = R$ ${quantidade*5.50}`)
         break
      case 400:
         console.log(`${quantidade} Bauru(s) = R$ ${quantidade*7.50}`)
         break
      case 500:
         console.log(`${quantidade} Refrigerante(s)= R$ ${quantidade*3.50}`)
         break
      case 600:
         console.log(`${quantidade} Suco(s) = R$ ${quantidade*2.80}`)
         break
      default:
         console.log('Produto inexistente!')
   }
}

calcularPedido(100, 2)
calcularPedido(200, 1)
calcularPedido(300, 3)
calcularPedido(400, 2)
calcularPedido(500, 5)
calcularPedido(600, 2)
calcularPedido(150, 2)