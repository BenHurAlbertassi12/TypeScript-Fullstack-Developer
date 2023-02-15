// Variaveis e Tipos
let b: string = 'b'
let n: number = 2
let x: boolean = true

let m: any = 2
m = 'Ben'
m = false

//Objetos e Interfaces
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string //caso esteja com o seguinte sinal ?: siginifica que é opcional
}
const pessoa: Pessoa = {
    nome: "Ben",
    idade: 34
}

const outraPessoa: Pessoa = {
    nome: "Hatus",
    idade: 30,
    profissao: "Dev Full-stack"
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [1, 2, 3]

const arrayString: Array<string> = [ "1", "2", "3" ]