class Produto {
    public id: number
    public descricao: string
    public qtde: number
    public preco: number

    constructor( id: number, descricao: string, qtde: number, preco: number){
        this.id = id
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco
    }
    public comprar(x: number): void {
        this.qtde = this.qtde + x
    }
    public vender(x: number): void {
        this.qtde = this.qtde - x
    }
    public subir(x: number): void {
        this.preco += x
    }
    public descer(x: number): void {
        this.preco -= x
    }
    public mostra(): void{
        console.log(`ID: ${this.id} Descrição: ${this.descricao} Qtde: ${this.qtde} Preço: ${this.preco}`)
    }
}
// cria objeto da classe
let obj1Produto = new Produto(1, "pão com mortadela", 2, 15.4)
let obj2Produto = new Produto(2, "x-bacon", 1, 24.7)
obj1Produto.comprar(2)
obj2Produto.comprar(4)
obj1Produto.subir(1)
obj2Produto.descer(2)

obj1Produto.mostra()
obj2Produto.mostra()