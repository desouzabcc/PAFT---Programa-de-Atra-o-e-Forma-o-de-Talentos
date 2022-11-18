/*
Crie a função Collatz que aceita como parâmetro o elemento inicial da
sequencia de Collatz e retorna uma função. A cada chamada dessa função,
retorne o próximo elemento da sequencia.
const seq = collatz(5);
console.log(seq()); //16
console.log(seq()); //8
console.log(seq()); //4
console.log(seq()); //2
console.log(seq()); //1
 */

function collatz(num){
    while(num != 1){
        if(num % 2 == 0){
            num /= 2;
        }else{
            num = num*3 + 1;
        }
    return(num);
    }
}
let num = prompt('entre com o num:');
console.log(`num final:${collatz(num)}`);
