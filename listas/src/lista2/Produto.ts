class ProdutoEncapsulado {
    public id: number
    public descricao: string
    private qtde: number // encapsular
    private preco: number // encapsular

    constructor( id: number, descricao: string, qtde: number, preco: number){
        this.id = id
        this.descricao = descricao
        this.setQtde(qtde)
        this.setPreco(preco)
    }
    // modificador de acesso
    public setQtde(qtde: number): void{
        if (qtde >= 0){
            this.qtde = qtde
        }
        else {
            console.log('Qtde inválida')
        }
    }
    public setPreco(preco: number): void{
        if (preco >= 0){
            this.preco = preco
        }
        else {
            console.log('Preço inválido')
        }
    }
    public comprar(x: number): void {
        this.qtde = this.qtde + x
    }
    public vender(x: number): void {
        this.setQtde(this.qtde - x)
    }
    public subir(x: number): void {
        this.preco += x
    }
    public descer(x: number): void {
        this.setPreco(this.preco - x)
    }
    public mostra(): void{
        console.log(`ID: ${this.id} Descrição: ${this.descricao} Qtde: ${this.qtde} Preço: ${this.preco}`)
    }
}
// cria objeto da classe
let obj1ProdutoEncapsulado = new ProdutoEncapsulado(1, "pão com mortadela", 2, 15.4)
let obj2ProdutoEncapsulado = new ProdutoEncapsulado(2, "x-bacon", 1, 24.7)
obj1ProdutoEncapsulado.setQtde(9)
obj1ProdutoEncapsulado.setPreco(-15)

obj1ProdutoEncapsulado.comprar(2)
obj2ProdutoEncapsulado.comprar(4)
obj1ProdutoEncapsulado.subir(1)
obj2ProdutoEncapsulado.descer(2)

