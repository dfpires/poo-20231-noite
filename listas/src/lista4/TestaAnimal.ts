import { Snake } from "./Snake"
import { Horse } from "./Horse"
import { Animal } from "./Animal"
function mostraDados(camaleao: Animal){
    console.log(camaleao.toString())
    console.log(camaleao.move())
}
// instanciar os objetos das classes Snake e Horse
let objSnake = new Snake('Cobra doidona', 5, false, true)
let objHorse = new Horse('Cavalo bravo', 3, true)
mostraDados(objSnake)
mostraDados(objHorse)
// outro exemplo de polimorfismo
let vetorAnimal: Animal[] = []
vetorAnimal.push(new Snake('Popcorn', 4, false, false))
vetorAnimal.push(new Horse('Little Poney', 6, false))