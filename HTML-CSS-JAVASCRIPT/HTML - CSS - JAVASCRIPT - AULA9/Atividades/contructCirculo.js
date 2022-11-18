/* Altere seu objeto círculo para utilizar a sintaxe com uma função construtora chamada Circulo */

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