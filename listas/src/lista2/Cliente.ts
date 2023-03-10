class ClienteEncap {
    private nroConta: string
    private nroAgencia: string
    private nome: string
    private saldo: number
    constructor(nroConta: string, nroAgencia: string, nome: string, saldo: number){
        this.setNroConta(nroConta)
        this.setNroAgencia(nroAgencia)
        this.setNome(nome)
        this.setSaldo(saldo)
    }
    setSaldo(saldo: number){
        saldo >= 0 ? this.saldo = saldo : console.log('saldo não pode ser negativo')
    }
    setNome(nome: string){
        nome.length <= 30 ? this.nome = nome : console.log('Nome inválido')
    }
    setNroConta(nroConta: string): void{
        if ((nroConta.length == 8) && (nroConta.charAt(6) == '-')){
            this.nroConta = nroConta
        }
        else console.log(`Nro da conta inválido`)
    }
    setNroAgencia(nroAgencia: string): void{
        if (nroAgencia.length == 6) {
            if (nroAgencia.charAt(4) == '-'){
                this.nroAgencia = nroAgencia
            }
            else console.log(`Nro da agência sem DV`)
        }
        else console.log(`Nro da agência tamanho inválido`)
    }
    getNroConta(): string{
        return this.nroConta
    }
    getNroAgencia(): string{
        return this.nroAgencia
    }
    getNome(): string {
        return this.nome
    }
    getSaldo(): number{
        return this.saldo
    }
    sacar(x: number){
        this.setSaldo(this.saldo - x)
    }
    depositar(x: number){
        this.setSaldo(this.saldo + x)
    }
    mostra(): void{
        console.log(`Conta ${this.nroConta} Agência ${this.nroAgencia} Nome: ${this.nome} Saldo ${this.saldo}`)
    }
}

let obj1ClienteEncap = new ClienteEncap("123456-7", "1234-5", "Fulano", 1000)
obj1ClienteEncap.depositar(400)
obj1ClienteEncap.sacar(500)
obj1ClienteEncap.mostra()
let obj2ClienteEncap = new ClienteEncap("123-567", "14-567345", "Fulano", 1000)
obj2ClienteEncap.sacar(1500)
obj2ClienteEncap.mostra()