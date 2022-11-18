/* Crie 3 timers A (0.5s), B (0.2s) e C (0.8s). Os timers devem produzir os valores a=5, b=10 e c=2, respectivamente. Ao final dos 3 timers, deve ser
calculada a expressão: a + b * c. O programa deve continuar funcionando mesmo se alterarmos os tempos dos timers entre uma execução e outra. */

const delayedPrint = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay)
    })
}
delayedPrint('Pontifícia Universidade', 1000)
    .then(() => delayedPrint('Católica do', 1000))
    .then(() => delayedPrint('Paraná', 1000));
