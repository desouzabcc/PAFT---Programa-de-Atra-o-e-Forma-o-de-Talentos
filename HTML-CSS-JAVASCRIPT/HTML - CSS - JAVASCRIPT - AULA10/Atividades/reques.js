/* Crie a função request(url, verbo='GET') que utilize o XMLHttpRequest na forma de um Promise.
• Use-a para fazer o mesmo get que fizemos no exemplo 2. Não esqueça de tratar possíveis erros com o .catch. */

 request("https://jsonplaceholder.typicode.com/posts/")
   .then(JSON.parse)
   .then(data => data.forEach(({title}) => console.log(title)))
   .catch(console.error);