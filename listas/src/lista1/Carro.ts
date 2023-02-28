// criação da classe
class Carro {
    // declaração das variáveis
    cor: string;
    modelo: string;
    potencia: number;
    combustivel: string;
    motor: boolean;
    // declaração do construtor
    constructor(combustivel: string, cor: string, modelo: string, 
        motor: boolean, potencia: number){
            this.combustivel = combustivel
            this.cor = cor
            this.modelo = modelo
            this.motor = motor
            this.potencia = potencia
    }
    // declaração de métodos
    // liga o motor do carro de um objeto
    ligar(){
        this.motor = true
    }
    // desliga o motor do carro de um objeto
    desligar(){
        this.motor =false
    }
    // aumenta a potência do carro em x unidades
    aumentaPotencia(x: number){
        this.potencia = this.potencia + x;
    }
}
// criação dos objetos da classe, ou seja, instância das classes
let obj1 = new Carro("Flex", "Preta", "Onix", false, 1.0)
console.log(obj1)
obj1.ligar()
obj1.aumentaPotencia(0.3)
console.log(obj1)

let obj2 = new Carro("Gasolina", "Branca", "Gol", true, 1.6)
console.log(obj2)
obj2.desligar()
