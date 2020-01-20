
// TRABALHANDO POR OBJETOS
const a = {name: "Teste"}

// AGORA MUDOU B ou A, MUDOU A ou B
const b = a

console.log(b.name)
console.log(a.name)

b.name = "Opa"

// Mudou de "a" também...
console.log(b.name)
console.log(a.name)

//-------------


// Trabalhando com valores primitivos

let c = 3

let d = c

//Agora c e d não são dependentes
d++ //incrementa em 1

console.log(c)
console.log(d)

//.....

let valor //não inicializada
console.log(valor)

// nosso None (python)
valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.50

console.log(produto.preco)
console.log(produto)

produto.preco = undefined //EVITE FAZER ISSO

console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)

delete produto.preco
console.log(produto)


