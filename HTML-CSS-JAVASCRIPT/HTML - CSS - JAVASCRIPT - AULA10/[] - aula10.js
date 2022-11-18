// setTimeout(() =>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() =>{
//         document.body.style.backgroundColor = 'green';
//         setTimeout(() =>{
//             document.body.style.backgroundColor = 'blue';
//             setTimeout(() =>{
//                 document.body.style.backgroundColor = 'yellow';
//             },2000);
//         },1000);
//     },1000);
// },1000);

/*setTimeout(() =>{
    document.body.style.backgroundColor = 'green';
},2000);*/

// const requestCallback = (url,sucess,failure) => {
//     const delay = Math.floor(Math.random() *4500) + 500;
//     setTimeout(()=>{
//         if(delay > 4000){
//             failure('Erro timeout');
//         }else{
//             sucess(`The data from site is ${url}`);
//         }
//     })
// }
// requestCallback('www.pucpr.br/notas',
//     function(response){
//         console.log(`funfou: ${response}`);
//         requestCallback('www.pucpr.br/alunos',
//         (response) =>{
//             console.log(`funfou: ${response}`);
//         },(err) =>{
//             console.log(`erro foi: ${err}`);
//         })
//     },
//     function(err){
//         console.log(`erro foi: ${err}`);
//     });

const requestPromise = (url) =>{
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random() *4500) + 500;
        setTimeout(()=>{
            if(delay > 4000){
                reject('Erro timeout');
            }else{
                resolve(`The data from site is ${url}`);
            }
        },delay);
    });
}
requestPromise('www.pucpr.br/notas')
    .then( (data) =>{
        console.log(`sucesso :${data}`);
        return requestPromise('www.pucpr.br/aluno')
    })
    .then( (data) =>{
        console.log(`sucesso :${data}`);
        return requestPromise('www.pucpr.br/professor')
    })
    .then( (data) =>{
        console.log(`sucesso :${data}`);
    })
    .catch( (err)=>{
        console.log("erro:" +err);
    })
