/*
Crie uma função eCrescente que teste se a lista informada é ou não
crescente. A sequencia não será considerada crescente se houver
um número menor que seu antecessor imediato
 */

function eCrescente(numeros) {
    for (const i = 0; i < numeros.length -1; i++) {
        if (numeros[i] > numeros[i+1]) return false;
    }
    return true;
}