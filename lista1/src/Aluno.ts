class Aluno {
    nroAluno: number
    nome: string
    idade: number
    p1: number
    p2: number
    // construtor
    constructor(nroAluno: number, nome: string, idade: number, 
        p1: number, p2: number){
            this.nroAluno = nroAluno
            this.nome = nome
            this.idade = idade
            this.p1 = p1
            this.p2 = p2
        }
    // notaFinal - calcula e retorna a nota final
    notaFinal(): number{
        return (this.p1 + this.p2) / 2
    }
    dadosAluno(): string {
        return `Nro aluno: ${this.nroAluno} Nome: ${this.nome} Idade: ${this.idade} Média: ${this.notaFinal()}`
    }
    passou(): void{ // não retorna nada
        if (this.notaFinal() >= 6){
            console.log('Aluno aprovado')
        }
        else {
            console.log('Aluno reprovado')
        }
    }
}
let objAluno = new Aluno(123, "Pedro", 20, 6.5, 7)
console.log(objAluno.notaFinal())
console.log(objAluno.dadosAluno())
objAluno.passou()