/*
7. Escreva a versão não recursiva e a
recursiva de uma função para calcular o nésimo
termo da sequencia de fibonnaci:
Ex.: Fib(6) = 13, pois:
1,1,2,3,5,8,13,21...

1, 𝑠𝑒 𝑛 = 0
1, 𝑠𝑒 𝑛 = 1
𝑓𝑖𝑏 𝑛 − 1 + 𝑓𝑖𝑏(𝑛 − 2), 𝑠𝑒 𝑛 > 1
*/

function fib1(n) {
    let n1 = 1;
    let n2 = 1;
    let result = n1;
    for (const i = 2; i <= n; i++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}

function fib2(n) {
    if (n <= 1) return 1;
    return fib2(n-1) + fib2(n-2);
}

const fib3 = n => n <= 1 ? 1 : fib3(n-1) + fib3(n-2);