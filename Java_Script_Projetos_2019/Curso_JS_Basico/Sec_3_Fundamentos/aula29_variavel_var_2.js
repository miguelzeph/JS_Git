var numero = 1


{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

// Por que isso ocorreu?
// Porque o Var iguinora tudo e faz virar
// global... exceto com FUNÇÕES