/* Para praticar a sintaxe, experimente criar um objeto chamado Circulo com raio 3. */

function criarCirculo(raio){
    return {
        raio,
        area(){
            return Math.PI * this.raio * this.raio;
        },
        perimetro(){
            return 2 * Math.PI * this.raio;
        }
    }
}
const circulo3 = criarCirculo(3);