/*
Crie uma função que receba uma lista de objetos e um campo, e retorne uma lista
com todos os valores desse campo sem repetição
*/

function unicos(valores, campo) {
    const resultados = {};
    for (const valor of valores) {
        resultados[valor[campo]] = true;
    }
    return Object.keys(resultados);
}