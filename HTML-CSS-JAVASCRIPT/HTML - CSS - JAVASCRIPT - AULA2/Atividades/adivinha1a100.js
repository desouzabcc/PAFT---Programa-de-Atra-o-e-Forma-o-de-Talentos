/*
Crie o jogo de adivinhar um número de 1 até 100.
• Caso ele entre um número maior escreva “Maior”
• Caso ele entre um número menor escreva “Menor”
• Caso ele entre com um número fora do intervalo ( 0 ou maior que 100) fale “desistiu?“ e
acabe o jogo
• O jogo deve perguntar até o usuário desistir ou falar o valor correto.
 */
const numero = Math.floor(Math.random()*(101-1)+1)
let entrada
do {
  entrada = Number(prompt("Digite um número: "))
  console.log(`o numero digitado é ${entrada} e escolhido é ${numero}`)
  if (entrada === numero){
    console.log('Você adivinhou! Parabéns')
    break;
  }
  else if (entrada < numero) console.log(`Menor`)
  else console.log(`Maior`)
}
while(entrada > 1 || entrada < 100)
console.log(`desistiu?`);
console.log(`o numero escolhido é ${numero}`)