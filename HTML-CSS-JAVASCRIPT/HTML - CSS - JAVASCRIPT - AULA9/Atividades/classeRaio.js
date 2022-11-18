/* 
Refatore o seu código para o círculo utilizar a sintaxe de classes. Crie o atributo do raio. Torne-o privado.
Adicione em sua classe um setter em que, caso o raio seja negativo, retire o sinal (um raio setado como -3 se tornaria 3)
Adicione getters para o método raio e também para a área e o perímetro.
Sobreponha o método toString() da sua classe Circulo para imprimi-la como Circulo de raio ${raio}
Crie um método estático criar que aceita uma lista como parâmetro e gera um círculo para cada número positivo em seu
interior, ignore os parâmetros que não puderem ser convertidos para números. */

class Circulo{
    #raio;
    constructor(raio){
        this.#raio = raio;
    }
    /*area(){
        return Math.PI * this.#raio * this.#raio;
    }
    perimetro(){    
        return 2 * Math.PI * this.#raio;
    }*/
    get area(){
        return Math.PI * this.#raio * this.#raio;
    }
    set area(area){ 
        this.#raio = Math.sqrt(area/Math.PI);
    }
    get perimetro(){
        return 2 * Math.PI * this.#raio;
    }
    set perimetro(perimetro) {
        this.#raio = perimetro/(2*Math.PI);
    }
    get raio() {
        return this.#raio
    }
    set raio(raio) {
        this.#raio = Math.abs(raio);
    }
    toString(){
        return `Circulo de raio ${this.#raio}`;
    }
    static criar(...lista){
        return lista
            .filter((raio) => typeof raio == 'number' && raio > 0)
            .map(raio => new Circulo(raio));
    }
}

let circulo1 = new Circulo(3);
//console.log(circulo1.area());
//console.log(circulo1.perimetro());
circulo1.area = 35;
let circulo2 = new Circulo(5);
circulo2.raio = -10;
console.log(`raio = ${circulo2.raio}`);
console.log(circulo2.area);
console.log(circulo2.perimetro);
console.log(circulo2.toString());
const circulos = Circulo.criar(1,2,"eee",3,4,5);
circulos.forEach(c => console.log(c.toString()));
