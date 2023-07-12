import { num1 } from "./tipos-de-dados.mjs"


function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    if (num1 === 0 || num2 === 0 ) {
        return 'Erro: impossivel dividir por 0'
    }
    return num1 / num2
}

console.log(`O resultado da soma foi: ${somar(20, 30)}`)
console.log(`O resultado da subtração foi: ${subtrair(20, 30)}`)
console.log(`O resultado da multiplicação foi: ${multiplicar(20, 30)}`)
console.log(`O resultado da divisão foi: ${dividir(20, 30)}`)

console.log(`Deve devolver uma linha com erro: \n ${dividir(0)}`)

