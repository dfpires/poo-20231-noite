import { CellPhone } from "./CellPhone";

export class Client {
    private id: number; private name: string; private cpf: string
    private cellPhones: CellPhone[]

    constructor(id: number, name: string, cpf: string, cellPhone: CellPhone){
        this.id=id ; this.name = name; this.cpf = cpf;
        this.cellPhones = [] // inicializa o vetor
        this.cellPhones.push(cellPhone)
    }
    addCellPhone(cellPhone: CellPhone) {
        this.cellPhones.push(cellPhone)
    }
    getName(): string{
        return this.name
    }
    toString(): string {
        return `{Id: ${this.id} Name: ${this.name} Cpf: ${this.cpf} CellPhones ${this.cellPhones}`
    }
}