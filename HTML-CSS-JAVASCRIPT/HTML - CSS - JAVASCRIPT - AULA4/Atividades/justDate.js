/* Crie a função justDate que recebe uma data e retorna a mesma data, mas com os campos de tempo zerados */

function justDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
console.log(`date:${justDate(new Date())}`);