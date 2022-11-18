/*
Crie a função verbose que recebe uma função como parâmetro e retorna
outra, que imprime no console toda chamada que for feita na função original
com seu resultado. Exemplo:
const soma = (a, b) => a + b;
const sum = verbose(soma);
sum(5,2); //Imprime soma(5,2) = 10
Dicas:
• A função join de uma lista pode ser usada para transforma-la em uma string
separada por vírgula: valores.join(",");
• Além disso, variáveis de função possuem a propriedade name que imprimem o
seu nome no momento da declaração.
 */

function verbose(fn) {
    return function(...values) {
        const result = fn(...values);
        console.log(`${fn.name}(${values.join(",")}) = ${result}`);
        return result;

    }
}