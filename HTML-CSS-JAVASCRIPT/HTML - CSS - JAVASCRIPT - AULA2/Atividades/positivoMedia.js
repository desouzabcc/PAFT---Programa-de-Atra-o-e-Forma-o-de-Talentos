/*
Crie uma lista com alguns valores e imprima:
• Os valores positivos
• A média de todos os valores
*/

const valores = [1, 10, -100, 50, 20, 40];
const positivos = [];
let soma = 0;
for (const valor of valores) {
  soma += valor;
  if (valor > 0) {
    positivos.push(valor);
  }
}
console.log(`Positivos: ${positivos}`);
console.log(`A média é ${soma / valores.length}`);
