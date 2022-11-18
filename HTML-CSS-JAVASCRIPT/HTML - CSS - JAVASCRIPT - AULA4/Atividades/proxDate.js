/* Crie uma função que recebe uma data inicial, um número n e um intervalo de tempo. 
Ela deve retornar uma lista, contando as n próximas datas considerando esse intervalo de tempo. */

function listInterval(date, n, interval){
    let list = [];
    for (let i = 0; i < n; i++) {
        list.push(new Date(date));
        date = interval(date);
    }
    return list;    
}

console.log(`listInterval:${listInterval(new Date(2020, 1, 1), 3, d => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1))}`);