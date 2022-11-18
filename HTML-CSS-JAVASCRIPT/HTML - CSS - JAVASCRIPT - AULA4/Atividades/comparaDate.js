/* Crie as funções de comparação de datas: before e after. 
Adicione um parâmetro opcional inclusive com valor padrão false que permite considerar também a própria data. */

function before(date1, date2, inclusive = false) {
    if (inclusive) {
        return date1 <= date2;
    }
    return date1 < date2;
}

console.log(`before:${before(new Date(2020, 1, 1), new Date(2020, 1, 2))}`);

function after(date1, date2, inclusive = false) {
    if (inclusive) {
        return date1 >= date2;
    }
    return date1 > date2;
}   

console.log(`after:${after(new Date(2020, 1, 1), new Date(2020, 1, 2))}`);