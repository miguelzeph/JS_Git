
let numero = 1  // Poderia ser também: var numero = 1


{
    let numero =2
    console.log("dentro = ", numero)
}

console.log('fora = ', numero)

// Viu a diferença de Var e Let???
// Let é mais obediente, ele não é global quando está dentro de 
//qualquer chaves.... 

//Já o Var só respeita as Funções (quando está dentro)...
//de Resto, ele é sempre global
