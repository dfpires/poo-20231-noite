import { Animal } from "./Animal";

export class Snake extends Animal {
    private poisonous: boolean
    private smoke: boolean

    constructor (name: string, age: number, poisonous: boolean, smoke: boolean){
        super(name, age); // chama o construtor da superclasse
        this.poisonous = poisonous; this.smoke = smoke
    }

    // anulação de método - porque está faltando dados
    toString(): string { 
        return `${super.toString()} Poisonous: ${this.poisonous ? 'Yes': 'No'  } Smoke: ${this.smoke ? 'Yes': 'No'}`
    }
    // anulação de método - porque não serve
    move():string {
        return 'Slithering ... '
    } 
}