/*
Escreva sua própria versão da função join. Esta função recebe uma lista e um
separador (por padrão ",") e gera o texto dos objetos em seu interior separados por
esse separador. Não se esqueça que o separador não ocorre após o último objeto da
lista
*/

function join(valores, separador = ",") {
    if (valores.length === 0) return "";
    let saida = `${valores[0]}`;
    for (let i = 1; i < valores.length; i++) {
       saida += `${separador}${valores[i]}`
    }
    return saida;
 }