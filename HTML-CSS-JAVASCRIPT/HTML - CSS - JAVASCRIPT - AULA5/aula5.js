const h1 = document.querySelector('h1');
h1.style.color = 'rgb(0,255,0)';
h1.onclick = () => {
    alert('h1 clicked');
};
const h1s = document.querySelectorAll('h1');
for (const h of h1s) {
    h.style.backgroundColor = 'red';
    h.innerText += ' ahhhh';
}
const itens = document.querySelector('.itens');
//document.getElementsByClassName('itens');
const newItem = document.createElement('li');
newItem.innerText = 'item novo';
newItem.id = 'item3';
newItem.classList.add('item3');
newItem.classList.add('uls');
newItem.addEventListener('mouseenter',function(){
    console.log('entered');
});
//newItem.onmouseenter

itens.appendChild(newItem);

const item1 = document.querySelector('#item1');
const input = document.querySelector('input');
/*input.oninput = function(e){
    h1.innerText = input.value;
};
input.oninput = function(e){
    newItem.innerText = input.value;
};*/
input.addEventListener('input',function(e){
    h1.innerText = input.value;
});
input.addEventListener('input',function(e){
    newItem.innerText = input.value;
});

