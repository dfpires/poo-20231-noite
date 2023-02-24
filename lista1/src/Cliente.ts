class Cliente{
    nroConta: number
    nroAgencia: number
    nome: string
    saldo: number
    
    public constructor(nroConta: number, nroAgencia: number, nome: string, 
        saldo: number){
            this.nroConta = nroConta
            this.nroAgencia = nroAgencia
            this.nome = nome
            this.saldo = saldo
        }
    
    public depositar(x: number): void {
        this.saldo = this.saldo + x
    }
    public sacar(x: number): void{
        if (this.saldo - x >= 0){
            this.saldo = this.saldo - x
        }
        else {
            console.log('Saldo insuficiente')
        }
    }
    dadosCliente(): string {
        return `Nro conta: ${this.nroConta} nome: ${this.nome} Saldo: ${this.saldo}`
    }
}

let objCliente1 = new Cliente(102341, 239, 'Marcelo', 1000)
let objCliente2 = new Cliente(45276, 956, 'João', 2000)
objCliente1.depositar(500)
objCliente1.sacar(300)
console.log(objCliente1.dadosCliente())

objCliente2.sacar(2000)
objCliente2.depositar(300)
console.log(objCliente2.dadosCliente())