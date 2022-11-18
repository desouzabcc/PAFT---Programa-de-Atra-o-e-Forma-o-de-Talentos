/* Chico tem 1,50 metro e cresce 2 centimetros por ano, enquanto Zé tem 1.10 metros 
e cresce 3 centimetros por ano.
Construa um algoritmo que calcule e imprima as alturas de Chico e Zé até que Zé seja maior que Chico */

let chico = 1.50
let ze = 1.10
while (chico >= ze) {
    chico = chico + 0.02
    ze = ze + 0.03
    console.log(`altura de Chico é ${chico.toFixed(2)} e altura de Zé é ${ze.toFixed(2)}`)
}