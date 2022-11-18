/* Crie a função between que recebe uma data, uma data de inicio, outra de fim e uma terceira data. Teste se a data está no meio desse intervalo. Adicione um objeto desestruturado opcional no quarto parâmetro para permitir os parâmetros opcionais inclusiveStart e inclusiveEnd */

function between(date, date1, date2, {inclusiveStart = false, inclusiveEnd = false} = {}) {
    if (inclusiveStart && inclusiveEnd) {
        return date >= date1 && date <= date2;
    }
    if (inclusiveStart) {
        return date >= date1 && date < date2;
    }
    if (inclusiveEnd) {
        return date > date1 && date <= date2;
    }
    return date > date1 && date < date2;
}
console.log(`between:${between(new Date(2020, 1, 2), new Date(2020, 1, 1), new Date(2020, 1, 3))}`);
