import { Animal } from "./Animal";

export class Horse extends Animal {
    private competitor: boolean
    constructor(name: string, age: number, competitor: boolean){
        super(name, age)
        this.competitor = competitor
    }
    // getters e setter
    // anulação de método - porque falta dados
    toString(): string {
        return `${super.toString()} Competitor: ${this.competitor ? 'Yes': 'No'}`
    }
    // anulação de método - porque não serve
    move(): string {
        return 'galloping'
    }
}