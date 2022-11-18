/*
Crie a função fixar que aceita uma função f e valores de parâmetros.
• Ela retorna outra função que chama f com esses parâmetros passados por primeiro
como se estivessem “fixos”.
• Exemplos:
function log(modulo, nivel, texto) {
console.log(`${nivel}: ${texto} (${modulo})`)
}
let logAula = fixar(log, `aula.js`, 'INFO');
logAula("Exemplo"); //Imprime INFO: Exemplo (aula.js)
logAula("PUCPR"); //Imprime INFO: PUCPR (aula.js)
let soma10 = fixar(soma, 10);
console.log(soma10(50)); //imprime 60
*/

function fixar(fn, ...esquerda) {
    return function(...direita) {
        return fn(...esquerda, ...direita);
    }
}