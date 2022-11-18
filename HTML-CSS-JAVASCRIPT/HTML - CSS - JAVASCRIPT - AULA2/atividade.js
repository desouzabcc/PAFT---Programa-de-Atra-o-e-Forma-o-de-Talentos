/*
Crie as variáveis peso e altura leia e as inicialize com seu peso e sua altura. Calcule o valor do IMC
(peso / altura2).Associe o valor verdadeiro a variável obeso caso o valor do IMC seja maior ou igual a
30. Imprima o texto, substituindo os valores em itálico pelas respectivas variáveis: O valor do IMC para peso quilos e altura metros é de imc
*/
const peso = prompt('digite seu peso');
const altura = prompt('digite sua altura');

const imc = (peso/(altura**2)).toFixed(2);

let obeso = false;
if(imc >= 30){
    obeso = true;
}

console.log(` O valor do IMC para ${peso} quilos e ${altura} metros é de ${imc}`);

/*
2.Leia um número e aplique sobre ele a conjectura de
Collatz
.
Ela diz que uma sequencia pode ser feita com base na seguinte
regra:
•Se o número n for par, o próximo é n/ 2
•Se for ímpar é 3n+1
•A sequencia termina em 1
*/
let num = prompt('entre com o num:');
while(num != 1){
    if(num % 2 == 0){
        num /= 2;
    }else{
        num = num*3 + 1;
    }
    console.log(num);
}
console.log(`num final:${num}`);

/*
 Chico tem 1,50 metro e cresce 2 centímetros por ano, enquanto Zé tem 1,10 metro e cresce 3
centímetros por ano. Construa um algoritmo que calcule e imprima as alturas de Chico e Zé até que
Zé seja maior que Chico
*/
let chico = 1.50;
let ze = 1.1;
let ano = 0;
while(chico > ze){
    chico += 0.02;
    ze += 0.03;
    ano++;
    console.log(`${ano}:Chico(${chico}) X Zé:(${ze})`);
}


let string1 = '1asdsad';
let string2 = "2asdsa";
let string3 = `3fgjkthfhgdfh`;

console.log(string1.length);
console.log(string1[3]);
console.log(string1.toUpperCase());
console.log(string1);
console.log(`AAAAAAAA`.toLowerCase());
console.log(`   AAAAAAAA   mais um AAAA   `.trim());
console.log(`   AAAAAAAA   mais um AAAA   `.indexOf('i'));
console.log('pucpr'.slice(2));
console.log('pucpr'.slice(0,3));

//console.log('banana'.replaceAll('a','o'));
console.log('banana'.replace('a','o'));


const tamanhos = [1, 3, 44, 55];
tamanhos[1]= 5;
tamanhos.push("aaaa");

//tamanhos = [1, 3, 44, 55];
tamanhos.pop();
for(let t of tamanhos){
    console.log(t);
    t = 3;
}
console.log(tamanhos);

let pessoa = {
    name:"mark",
    idade:41,
    isVivo:true
}
let pessoa2 = pessoa;
let num1 = 3;
let num2 = num1;
num2 = 4;

console.log(pessoa.name);
console.log(pessoa["name"]);

console.log(typeof pessoa);
pessoa["sexo"] = "M";
console.log(pessoa);
