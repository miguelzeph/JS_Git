// Função sem retorno
function imprimir(a, b){
    console.log(a+b)
}


imprimir(1,2)
// No Python daria Erro
imprimir(1)
imprimir(1,2,3) // ele iguinora o 3
imprimir()


// Funcao com Retorno

function soma(a,b=0){//já defini o b = 0 (default)
    return a+b
}

console.log(soma(1))
console.log(soma(1,2))
