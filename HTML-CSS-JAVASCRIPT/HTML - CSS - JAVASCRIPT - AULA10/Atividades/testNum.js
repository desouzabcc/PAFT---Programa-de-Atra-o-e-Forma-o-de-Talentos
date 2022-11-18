/* Escreva uma função testNum que receba um número como um argumento e retorne um Promise que resolve em caso o número seja maior que dez, ou
rejeite caso contrário. Use-o exibindo uma mensagem em cada caso. */

function testNum(num) {
   return new Promise((resolve, reject) => {
      if (num > 10) {
         resolve(num);
      }  else {
         reject(num);
      }      
   });
}

testNum(10)
   .then(v => console.log(`Numero é maior que 10: ${v}`))
   .catch(v => console.log(`Numero não é maior que 10: ${v}`))

   function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
     const result = [];
     for (let word of words) {
        if (typeof word !== 'string') {
           reject(word);
           return;
        }
        result.push(word.toUpperCase());
     }
     resolve(result);
  });
}   
function sortWords(words) {
   return new Promise((resolve, reject) => {
      resolve([...words].sort());
   });
}

makeAllCaps(["carambola", "abacaxi", "banana"])
   .then(sortWords)
   .then(console.log)
   .catch(v => console.log("Não é um texto: " + v));

   function request(url, verbo='GET') {
    return new Promise((resolve, reject) => {
       var XMLHttpRequest = require('xhr2');

       const req = new XMLHttpRequest();
       req.open(verbo, url);
       req.onload = () => { 
          if (req.status >= 400 && req.status <= 599) {   //OK    
             reject({status: req.status, message: req.message});            
          } else {
             resolve(req.response);
          } 
       };
       req.error = () => { reject({status: null, message: "Network error."}) } 
       req.send();
    });   
 }