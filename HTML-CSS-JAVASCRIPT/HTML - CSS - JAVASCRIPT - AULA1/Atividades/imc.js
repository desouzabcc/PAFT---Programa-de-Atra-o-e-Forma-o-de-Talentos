/*Crie as variáveis peso e altura e as inicialize com seu peso e sua altura
Calcule o valor do IMC(peso / altura²). Associe o valor verdadeiro a variável
obeso caso o valor do IMC seja maior ou igual a 30.
Imprima o texto, substituindo os valores em itálico pelas respectivas variáveis:
O valor do IMC para o peso de peso em quilos e altura em metros é de imc.*/

const peso = prompt('digite seu peso');
const altura = prompt('digite sua altura');

const imc = (peso/(altura**2)).toFixed(2);

let obeso = false;
if(imc >= 30){
    obeso = true;
}

console.log(` O valor do IMC para ${peso} quilos e ${altura} metros é de ${imc}`);

if (obeso)
  console.log(`Você esta obeso`)
else
  console.log(`Você não esta obeso`)