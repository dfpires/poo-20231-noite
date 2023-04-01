// classe parte
class Product {
    private name: string; private price: number
    constructor( name: string, price: number){
        this.name = name
        this.price = price
    }
    /* fazer os setters e getters */
    getPrice(): number{
        return this.price
    }
    /* método que converte o objeto em uma string */
    toString(): string{
        return `{Name: ${this.name} Price: ${this.price}}`
    }
}
// classe toda para a relação com o Product
// classe parte para a relação com o ShoppingCart
class CarItem {
    private product: Product; // agregação
    private quantity: number
    constructor(product: Product, quantity: number){
        this.product = product; this.quantity = quantity;
    }

    calculatePrice(): number{
        return (this.quantity * this.product.getPrice())
    }
    /* método que converte o objeto em uma string */
    toString(): string{
        return `{Product: ${this.product.toString()} Quantity: ${this.quantity} Total Item Price ${this.calculatePrice()}}`
    }
}

let obj1Product = new Product("bola de basquete", 100)
let obj2Product = new Product("Alexa", 400)
let obj3Product = new Product("Caixa de som com bluetooth", 200)

let obj1CarItem = new CarItem(obj1Product, 2)
let obj2CarItem = new CarItem(obj2Product, 1)
let obj3CarItem = new CarItem(obj3Product, 6)

// class todo para a relação com CarItem
class ShoppingCart {
    private id: number;
    private carItens: CarItem[] // vetor de itens do carrinho

    constructor(id: number, carItens: CarItem[]){
        this.id = id; this.carItens = carItens
    }
    // adiciona um CarItem dentro do ShoppingCart
    addItem(item:CarItem): void{
        this.carItens.push(item)
    }

    /* método que converte o objeto em uma string */
    toString(): string{
        // vamos percorrer o vetor usando EcmaScript 5/6 - JS
        let saida: string = ""
        this.carItens.forEach(item => {
            saida = saida + "\n" + item.toString()
        })
         return `{ID: ${this.id} CarItens: ${saida} \n Total Price: ${this.calculateTotalPrice()}}`
    }
    calculateTotalPrice(): number {
        let soma: number = 0
        // percorre o vetor
        this.carItens.forEach(item => {
            soma += item.calculatePrice()
        })
        return soma
    }
}

let objShoppingCart = new ShoppingCart(1, []) // carrinho de compra iniciado vazio
objShoppingCart.addItem(obj1CarItem)
objShoppingCart.addItem(obj2CarItem)
objShoppingCart.addItem(obj3CarItem)

console.log(objShoppingCart.toString())





