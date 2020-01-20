// Armazenando uma função em uma variavel

const imprimir = function (a,b){
    console.log(a+b)
}

imprimir(1,2)

// (A setinha é a "Function")
// Armazenando uma função ARROW em uma variável
const soma = (a,b) => {
    return a+b
}

console.log(soma(1,2))


// retorno implícito
const subtracao = (a,b) => a-b // Sem chaves, ele só executa uma linha

console.log(subtracao(1,2))

// funcao de um parametro (nem parenteses precisa)
const imprimir2 = a => console.log(a)
imprimir2("Legal")

