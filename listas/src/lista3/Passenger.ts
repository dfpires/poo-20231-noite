export class Passenger {
    private id: number; private name: string; private cpf: string
    constructor(id: number, name: string, cpf: string){
        this.setId(id); this.setName(name); this.setCpf(cpf);
    }
    setId(id: number){
        if (id <= 100){
            this.id = id
        }
        else { 
            console.log('Id errado'); 
    }
        
    }
    setName(name: string){
        this.name = name
    }
    setCpf(cpf: string) {
        this.cpf = cpf
    }
    getId(): number{
        return this.id
    }
    getName(): string {
        return this.name
    }
    getCpf(): string{
        return this.cpf
    }
    toString(): string {
        return `{Id: ${this.id} Name: ${this.name} Cpf: ${this.cpf}}`
    }
}

let obj = new Passenger(110, "Pedro", "123");
console.log(obj)