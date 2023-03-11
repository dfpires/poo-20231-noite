// classe parte
class Product {
    constructor(private name: string, private price: number){

    }
    getPrice(): number{
        return this.price
    }
}
// classe toda para a relação com o Product
// classe parte para a relação com o ShoppingCart
class CarItem {
    constructor(private product: Product, private quantity: number){

    }
    calculatePrice(): number{
        return (this.quantity * this.product.getPrice())
    }
}

let objProduct = new Product("bola de basquete", 100)
let objCarItem = new CarItem(objProduct, 2)
console.log(objCarItem.calculatePrice())

// class todo para a relação com CarItem
class ShoppingCart {
    constructor(private id: number, private items: CarItem[]){

    }
    // adiciona um CarItem dentro do ShoppingCart
    addItem(item:CarItem): void{
        this.items.push(item)
    }
}

let objShoppingCart = new ShoppingCart(1, []) // carrinho de compra iniciado vazio
objShoppingCart.addItem(objCarItem)
console.log(objShoppingCart)
/* lição de casa 
crie mais 2 produtos
crie mais 3 itens do carrinho
adicione os itens do carrinho no carrinho
visualize o resultado
tente mostrar os dados do produto ao visualizar os carrinho de compra
*/