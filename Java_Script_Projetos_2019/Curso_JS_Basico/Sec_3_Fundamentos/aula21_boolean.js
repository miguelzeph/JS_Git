let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// 1,2,3,4,5... = True, 0 =False
isAtivo = 1
//Exclamacao e uma degacao do Boolean.
console.log(!!isAtivo) // Jogadinha para fazer numero virar Boolean

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'basta ter um espaço...')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos são...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar....")
console.log(!!('' || null || 0 || ' ')) // ou = ||


// Jogada interessante
let nome = '' //falso

console.log(nome || 'Desconhecido') // ele vai retornar "Desconhecido", pois o primeiro termo é false


let nome2 = 'Miguel' //verdadeiro

console.log(nome2 || 'Desconhecido') // ele vai retornar "Desconhecido", pois o primeiro termo é false

