

const valores = [1, 10, -100, 50, 20, 40];
const positivos = [];
let soma = 0;
for (const valor of valores) {
  soma += valor;
  if (valor > 0) {
    positivos.push(valor);
  }
}
console.log(`Positivos: ${positivos}`);
console.log(`A média é ${soma / valores.length}`);

/*Crie uma lista com 15 pessoas lendo seu nome e cor.
As cores podem ser “branco”, “negro”, “pardo” e “outro”
Em seguida, mostre quantas pessoas tem cada cor
Tente resolver esse problema sem usar uma cadeia de “ifs” ou switch
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

function hello(){
  console.log("hello");
}
hello();

function greet(name){
  console.log(`hello ${name}`);
}
greet("Mark");
greet(true);
greet(26);
function add(x,y){
  if(typeof x != 'number' || typeof y != 'number')
    return false
  return x+y;
}
console.log(add(30,1));

console.log(add("Mark",true));

const addNumber = function(x,y){
  return x+y;
}
console.log(addNumber(3,5));
console.log(addNumber(3));
mudarCanetas();
let canetas = 3;
function mudarCanetas(){
  let canetas = 5;
  console.log("Mudar"+canetas);
}
console.log(canetas);
mudarCanetas();
console.log(canetas);

const quadrado = (x) => {
  return x*x;
}
console.log(quadrado(2));

const q2 = x => x*x;
console.log(q2(2));

const teste = (x , y=2) =>{
  console.log(ex);
  if(x > y){
    var ex = "existe";
  }
  console.log(ex);
}
teste(1);
console.log("----");
teste(2,1);

function varParam(x,...parms){
  console.log(x);
  for(let v of parms){
    console.log(v);
  }
}
varParam(1,2,3,4,5,6);
add(...[3,4]);
let nums = [1,2];
add(...nums);

function outFunc(produto){
  function inFunc(produto){
    console.log(produto)
  }
  inFunc(produto)
}
outFunc("teste");
function call2(func){
  console.log("chamar 1");
  func();
  console.log("chamar 2");
  func();
}
call2(mudarCanetas);
call2(function(){
  console.log("x");
});

function make2Msgs(){
  const rand = Math.random();
  if(rand < 0.5){
    return function(){
      console.log("menor"+rand);
    }
  }else{
    return function(){
      console.log("maior"+rand);
    }
  }
}
const msgs = make2Msgs();
msgs();
msgs();