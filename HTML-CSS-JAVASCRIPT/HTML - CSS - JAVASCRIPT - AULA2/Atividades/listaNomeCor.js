/*
Crie uma lista com 15 pessoas lendo seu nome e cor.
• As cores podem ser “branco”, “negro”, “pardo” e “outro”
• Em seguida, mostre quantas pessoas tem cada cor
• Tente resolver esse problema sem usar uma cadeia de “ifs” ou switch
 */

const pessoas = [{nome:"m",cor:"branco"},
{nome:"r",cor:"branco"},
{nome:"y",cor:"negro"},
{nome:"h",cor:"negro"},
{nome:"j",cor:"branco"}];

let contagem = {};
for (let pessoa of pessoas) {
    if (!contagem[pessoa.cor]) {
       contagem[pessoa.cor] = 1;
    } else {
       contagem[pessoa.cor]++;
    }
}
console.log(contagem);