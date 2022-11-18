/* 
Crie uma função chamada mais, que aceite 2 parâmetros e os
some. Utilize as 3 sintaxes possíveis. 
*/

function soma(a,b){
    return a+b;
}

let num1 = Number(prompt("Entre com o primeiro numero"))
let num2 = Number(prompt("Entre com o segundo numero"))
let resultado = soma(num1, num2)
console.log(`A soma do numero ${num1} com ${num2} é ${resultado}`)