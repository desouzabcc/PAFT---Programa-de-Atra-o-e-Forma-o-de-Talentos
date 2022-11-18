/* Escreva duas funções puras que retornem Promises:
• A primeira, makeAllCaps(), receberá um array de palavras e tornará todas maiúsculas. Ela
rejeitará caso o array contenha um dado que não seja string.
• A segunda, sortWords(), ordenará as palavras em ordem alfabética.
• Em seguida, teste-as*/

let a = 0;
let b = 0;
let c = 0;
let contador = 0;

function realizaCalculo() {
    contador = contador + 1;
    if (contador === 3) {
        console.log(a + b * c);
    }
}

setTimeout(() => {
    a = 5;
    realizaCalculo();
}, 500);
setTimeout(() => {
    b = 10;
    realizaCalculo();
}, 200);
setTimeout(() => {
    c = 2;
    realizaCalculo();
}, 800);