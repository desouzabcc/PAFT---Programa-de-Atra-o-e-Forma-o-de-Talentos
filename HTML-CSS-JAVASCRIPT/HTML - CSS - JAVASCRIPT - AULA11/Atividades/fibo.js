/* Usando async e await crie uma página que calcula o fibonati de um número mostrando o cálculo passo a passo. */

async function fibo1(n) {
    if (n === 0 || n === 1) return n;
    const f1 = await fibo1(n - 1);
    const f2 = await fibo1(n - 2);
    return f1 + f2;
  }
  
  async function fibo2(n) {
    if (n === 0 || n === 1) return n;
    const [f1, f2] = await Promise.all([fibo2(n - 1), fibo2(n - 2)]);
    return f1 + f2;
  }
  
  async function go() {
    const n = 20;
  
    console.time('fibo1');
    await fibo1(n);
    console.timeEnd('fibo1');
  
    console.time('fibo2');
    await fibo2(n);
    console.timeEnd('fibo2');
  }
  
  console.clear();
  go();