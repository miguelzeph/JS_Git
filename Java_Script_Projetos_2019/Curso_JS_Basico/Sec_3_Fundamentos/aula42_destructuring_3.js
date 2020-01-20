function rand({min = 0, max = 100}) { // Se eu não setar nenhum valor no Min e Max, eles vão de Default 0 e 100

    const valor = Math.random()*(max - min) 
    
    return Math.floor(valor) // exemplo: Math.floor(10.50) = 10
}


console.log(rand({})) // padrao-> min = 0 e max = 100


//Agora vou setar alguns valores

const parametros = {x: 10, y:15} //  x = min ... y = max...


console.log(rand(parametros))

// outra maneira 
console.log(rand({min:90})) // max = 100 por Dafault
