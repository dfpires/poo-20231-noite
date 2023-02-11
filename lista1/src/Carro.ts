// criação da classe
class Carro {
    // declaração das variáveis
    cor: string;
    modelo: string;
    potencia: number;
    combustivel: string;
    motor: boolean;
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
let obj1 = new Carro();
obj1.combustivel = "Flex";
obj1.cor = "Preta";
obj1.modelo = "Onix";
obj1.motor = false;
obj1.potencia = 1.0
console.log(obj1)
obj1.ligar()
obj1.aumentaPotencia(0.3)
console.log(obj1)

let obj2 = new Carro();
obj2.combustivel = "Gasolina";
obj2.cor = "Branca";
obj2.modelo = "Gol";
obj2.motor = true;
obj2.potencia = 1.6
console.log(obj2)