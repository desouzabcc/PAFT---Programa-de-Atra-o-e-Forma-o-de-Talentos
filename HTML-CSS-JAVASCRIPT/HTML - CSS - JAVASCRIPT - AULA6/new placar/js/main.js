let somador1 = 0;
let somador2 = 0;

function jogada (jogador){
    if (jogador === 1){
        somador1 += 1;
        document.querySelector("#casa").innerText = somador1;
    }
    else{
        somador2 += 1;
        document.querySelector("#visitante").innerText = somador2;
    }
};

function zerar (){
    somador1 = 0;
    somador2 = 0;
    document.querySelector("#casa").innerText = somador1;
    document.querySelector("#visitante").innerText = somador2;
};

for (let i = 3; i<=21; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
 }