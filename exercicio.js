"use strict";
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
function saudacao(nome) {
    return `Olá ${nome}`;
}
const resultadoMultiplicacao = multiplicacao(5, 3);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
const saudacaoFinal = saudacao("Alice");
console.log(saudacaoFinal);
