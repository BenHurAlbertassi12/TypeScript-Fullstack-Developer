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

const arrayString: Array<string> = ["1", "2", "3"]

//Decisões e Repetições

const num: number = 15
if (num > 15) {
    console.log('Num maior que 15');    
} else if(num === 15) {
    console.log('Num igual a 15');    
} else {
    console.log('Num menor que 15');    
}

const typeUser = {
    adm: 'Seja bem vindo admin',
    student: 'Voce é um estudante',
    viwer: 'Voce pode visualizar',
}
function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);  
}
const usuario = 'adm'
validateUser(usuario)
validateUser('student')
validateUser('viwer')

// Estrutura de Repetição
//for
for (let index = 0; index < 5; index++) {
    console.log(index);
}
///while
let numW = 2
while (numW < 6) {
    console.log(n);
    n++
}

//Array
const arrayNumb: Array<number> = [1,2,3,4,5]
const arrayStri: string[] = ["1", "2", "3", "4", "5"]
console.log(arrayNumb[0]);
console.log(arrayStri.length);

