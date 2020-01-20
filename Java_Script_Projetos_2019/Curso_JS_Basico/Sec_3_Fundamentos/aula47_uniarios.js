let num1 = 1
let num2 = 2

num1++ // sem prioridade

console.log(num1)

--num1 // com prioridade

console.log(num1)


// vai dar VERDADEIRO... pois ++ vem com prioridade por estar na frente
// logo ele calcula mais rápido que o num2-- .... 
// Além disso, são de valores iguais e tipos iguais (===)
console.log(++num1 === num2--)
console.log(num1 === num2)