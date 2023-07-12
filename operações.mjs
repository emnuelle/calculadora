import { num1, num2 } from "./tipos-de-dados.mjs"

const calculadora = {
    resultado: 0,
    somar: function (num1, num2) {
        this.resultado = num1 + num2
        return this.resultado;
    },
    subtrair: function (num1, num2) {
        this.resultado = num1 - num2
        return this.resultado;
    },
    multiplicar: function (num1, num2) {
        this.resultado = num1 * num2
        return  this.resultado;
    },
    dividir: function (num1, num2) {
        if (num1 === 0 || num2 === 0 ) {
            return 'Erro: impossivel dividir por 0'
        }
        this.resultado = num1 / num2
        return this.resultado;
    }
};
// this (substitui o nome da calculadora dentro da função)

console.log(`O resultado da soma foi: ${calculadora.somar(num1,num2)}`);
console.log(`O resultado da subtração foi: ${calculadora.subtrair(num1,num2)}`);
console.log(`O resultado da multipliação foi: ${calculadora.multiplicar(num1,num2)}`);
console.log(`O resultado da divisão foi: ${calculadora.dividir(num1,num2)}`);
console.log(`Deve devolver uma linha com erro: \n ${dividir(0)}`);

// console.log(`O resultado da soma foi: ${somar(num1, num2)}`);
// console.log(`O resultado da subtração foi: ${subtrair(num1, num2)}`);
// console.log(`O resultado da multiplicação foi: ${multiplicar(num1, num2)}`);
// console.log(`O resultado da divisão foi: ${dividir(num1, num2)}`);



