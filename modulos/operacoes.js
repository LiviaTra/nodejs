function soma(a,b) {
    console.log(a + b);
    }

function subtracao(a,b) {
    console.log(a - b);
    }

function multiplicacao(a,b) {
    console.log(a * b);
}

function divisao(a,b) {
    console.log(a / b);
}

function resto(a,b) {
    console.log(a % b);
}

function exponenciacao(a,b) {
    console.log(a ** b);
}

    module.exports = {
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao,
    resto: resto,
    exponenciacao: exponenciacao
    };