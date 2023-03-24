export class Employee {
    private id: number; private name: string; private code: number
    constructor(id: number, name: string, code: number){
        this.id=id ; this.name = name; this.code = code;
    }
    getCode(): number{
        return this.code
    }
    
    toString(): string {
        return `{Id: ${this.id} Name: ${this.name} Code: ${this.code}`
    }
}