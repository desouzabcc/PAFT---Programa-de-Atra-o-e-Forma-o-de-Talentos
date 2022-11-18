/* Em seguida, programe os métodos para calcular a área (PI*raio*raio) e o perímetro do círculo (2*PI*raio) */

const circulo = {
    raio: 3,
    area(){
        return Math.PI * this.raio * this.raio;
    },
    perimetro(){
        return 2 * Math.PI * this.raio;
    }
}
console.log(circulo.area());
console.log(circulo.perimetro());  