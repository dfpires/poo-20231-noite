export class Animal {
    protected name: string
    protected age: number
    constructor(name: string, age: number){
        this.name = name; this.age = age;
    }
    // fazer getters e setters
    // toString
    toString(): string{
        return `{Name: ${this.name} Age: ${this.age}}`
    }
    // move
    move(): string{
        return ` Moving .... `
    }
}
