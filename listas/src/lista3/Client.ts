export class Client {
    private id: number; private name: string; private cpf: string
    constructor(id: number, name: string, cpf: string){
        this.id=id ; this.name = name; this.cpf = cpf;
    }
    getName(): string{
        return this.name
    }
    toString(): string {
        return `{Id: ${this.id} Name: ${this.name} Cpf: ${this.cpf}`
    }
}