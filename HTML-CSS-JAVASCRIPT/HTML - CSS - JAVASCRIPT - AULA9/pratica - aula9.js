const obj = {
    nome:"Mark",
    hello: function(texto){
        console.log(`${this.nome} falou ${texto}`);
    }
};
obj.hello("Olá");
const obj2 = {
    nome:"Isadora",
    hello:obj.hello
};
obj2.hello("oi");
const obj3 = {
    nome:"Larissa"
};
obj.hello.call(obj3,"tchau");
const obj4 = {
    nome:"Mark",
    hello: function(){
        
        function talk(self){
            return `${self.nome} falou`;
        }
        console.log(talk(this));
    }
};
obj4.hello();

String.prototype.grito = function(){
    return `${this.toUpperCase()}!!!`;
}
console.log("Mark".grito());
Array.prototype.pop = function(){
    return 'cannot pop';
}
const numeros = [1,2,3,4,5];
console.log(numeros.pop());
console.log(numeros);

const Pessoa = {
    nome:"Mark",
    hello: function(texto){
        console.log(`${this.nome} falou ${texto}`);
    }
};
const mark = Object.create(Pessoa);
mark.nome = "Mark Joselli";
mark.hello("bye");
function createColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.print = function(){
        console.log(`RGB(${this.r},${this.g},${this.b})`);
    }
    return color;
}
const cor = createColor(2,4,6);
cor.print();

const azul = createColor(0,0,255);
azul.print();
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.print = function(){
    console.log(`RGB(${this.r},${this.g},${this.b})`);
};
class ColorClass{
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    print() {
        console.log(`RGB(${this.r},${this.g},${this.b})`);
    }
}

const red = new ColorClass(255,0,0);
red.print();

const verde = new Color(0,255,0);
console.log(verde.g);
verde.print();
class Pet{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    print(){
        console.log(this.nome);
    }
}
class Cat extends Pet{
    constructor(nome,idade,vidas = 7){
        super(nome,idade);
        this.vidas = vidas;
    }
    miau(){
        super.print();
        console.log(`${this.nome} está miando`);
    }
}
class Dog extends Pet{
    latir(){
        console.log(`${this.nome} está latindo`);
    }
}

class Lion extends Cat{
    rugir(){
        console.log(`${this.nome} está rugindo`);
    }
}
const meuPet = new Lion("Coragem",4);
meuPet.rugir();
meuPet.miau();
meuPet.vidas;

const zoo = [new Pet("Pet",1),new Cat("Cat",1,7),new Dog("Dog",3),new Lion("Lion",1),new ColorClass(3,4,5)];
zoo.forEach(element => {
    element.print();
});
class Retangulo{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    static area(x,y){
        return x*y;
    }
}
const r = new Retangulo("quad");
r.nome = "teste";
console.log(Retangulo.area(2,4));