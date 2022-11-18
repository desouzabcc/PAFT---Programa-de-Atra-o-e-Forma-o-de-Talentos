/* Crie um timer que imprima o texto “PUCPR” a cada meio segundo. Pare o timer após 5 execuções. */

let printCounter = 0;
const printPucpr = setInterval(() => {
    console.log('PUCPR');
    printCounter++;
    if (printCounter === 5) {
        clearInterval(printPucpr);
    }
},500);