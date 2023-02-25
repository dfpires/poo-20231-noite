class Rio {

    constructor(public nome: string, public nivel: number, public poluido: boolean){
    }
    mostra(): void{
        console.log(`Nome: ${this.nome} Nível: ${this.nivel} Poluído: ${this.poluido ? 'sim': 'não'}`)
    }
    sujar(): void{
        this.poluido = true
    }
    limpar(): void{
        this.poluido = false
    }
    chover(x: number): void{
        this.nivel += x
    }
    ensolarar(x: number): void{
        this.nivel -= x
    }
}

let obj1Rio = new Rio("Paraná", 2.7, false)
console.log(obj1Rio)
obj1Rio.mostra()