
//1.Crie uma função chamada mais, que aceite 2 parâmetros e os some. Utilize as 3 sintaxes possíveis.

//Função como variável
const mais = function(a, b) {
    return a + b;
}

//Função tradicional
function mais1(a, b) {
    return a + b;
}

//Arrow function
const mais2 = (a, b) => a + b;
//2.Crie uma função chamada menos. Caso seja passado apenas 1 parâmetro, retorne o valor negativo. Caso sejam passados 2, retorne a subtração dos dois. Exemplo:

console.log(menos(10)); //Imprime -10
console.log(menos(5,2)); //Imprime 3

function menos(a, b) {
    if (b === undefined) {
        return -a;
    }
    return a - b;
}
//3.Crie uma função eCrescente que teste se a lista informada é ou não crescente. A sequencia não será considerada crescente se houver um número menor que seu antecessor imediato

function eCrescente(numeros) {
    for (const i = 0; i < numeros.length -1; i++) {
        if (numeros[i] > numeros[i+1]) return false;
    }
    return true;
}
//4. Crie a função maior, que encontre o maior entre todos os valores passados em seus argumentos.

console.log(maior(1,10,-1,5)); //Imprime 10

console.log(maior(1,-100,5)); //Imprime 5

 

function maior(...valores) {
   if (valores.length === 0) return null;
   let maior = valores[0];
   for (const valor of valores) {
      if (valor > maior) {
         maior = valor;
      }
   }
   return maior;
}
 

//5. Escreva sua própria versão da função join. Esta função recebe uma lista e um separador (por padrão ",") e gera o texto dos objetos em seu interior separados por esse separador. Não se esqueça que o separador não ocorre após o último objeto da lista

function join(valores, separador = ",") {
   if (valores.length === 0) return "";
   let saida = `${valores[0]}`;
   for (let i = 1; i < valores.length; i++) {
      saida += `${separador}${valores[i]}`
   }
   return saida;
}
 

//6. Crie uma função que receba uma lista de objetos e um campo, e retorne uma lista com todos os valores desse campo sem repetição

function unicos(valores, campo) {
    const resultados = {};
    for (const valor of valores) {
        resultados[valor[campo]] = true;
    }
    return Object.keys(resultados);
}
//7. Escreva a versão não recursiva e a recursiva de uma função para calcular o n-ésimo termo da sequencia de Fibonnaci

function fib1(n) {
    let n1 = 1;
    let n2 = 1;
    let result = n1;
    for (const i = 2; i <= n; i++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}

function fib2(n) {
    if (n <= 1) return 1;
    return fib2(n-1) + fib2(n-2);
}

const fib3 = n => n <= 1 ? 1 : fib3(n-1) + fib3(n-2);
 

//8. Crie uma função mapear que aceite um array e uma função de mapeamento. Essa função recebe um elemento do array, realiza sobre ele qualquer cálculo, retornando outro.

//Exemplo:
const dobro = mapear([1,2,3,4], x => x * 2);
console.log(dobro); //[2,4,6,8]
function mapear(array, fn) {
    const out = [];
    for (const valor of array) {
        out.push(fn(valor));
    }
    return out;
}
//9. Crie a função Collatz que aceita como parâmetro o elemento inicial da sequencia de Collatz e retorna uma função. A cada chamada dessa função, retorne o próximo elemento da sequencia.
 const seq = collatz(5);
console.log(seq()); //16
console.log(seq()); //8
console.log(seq()); //4
console.log(seq()); //2
console.log(seq()); //1

function collatz(elem) {
    let inicio = elem;
    return function() {
        if (elem % 2 == 0) {
            elem /= 2;
        } else {
            elem = 3 * inicio + 1;
        }
        return elem;
    }
}
//10. Crie a função verbose que recebe uma função como parâmetro e retorna outra, que imprime no console toda chamada que for feita na função original com seu resultado.

//Exemplo:

const soma = (a, b) => a + b;
const sum = verbose(soma);
sum(5,2); //Imprime soma(5,2) = 10

/*
Dicas:

A função join de uma lista pode ser usada para transforma-la em uma string separada por vírgula: valores.join(",");
Além disso, variáveis de função possuem a propriedade name que imprimem o seu nome no momento da declaração.
*/
function verbose(fn) {
    return function(...values) {
        const result = fn(...values);
        console.log(`${fn.name}(${values.join(",")}) = ${result}`);
        return result;

    }
}
/*11. Crie a função fixar que aceita uma função f e valores de parâmetros.

Ela retorna outra função que chama f com esses parâmetros passados por primeiro como se estivessem “fixos”.
Exemplos:
*/
function log(modulo, nivel, texto) {
    console.log(`${nivel}: ${texto} (${modulo})`)
}
let logAula = fixar(log, `aula.js`, 'INFO');
logAula("Exemplo");  //Imprime INFO: Exemplo (aula.js)
logAula("PUCPR");  //Imprime INFO: PUCPR (aula.js)

let soma10 = fixar(soma, 10);

console.log(soma10(50)); //imprime 60

function fixar(fn, ...esquerda) {
    return function(...direita) {
        return fn(...esquerda, ...direita);
    }
}