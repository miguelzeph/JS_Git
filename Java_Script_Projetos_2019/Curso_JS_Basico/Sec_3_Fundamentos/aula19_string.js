const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(0))
console.log(escola.charCodeAt(3)) // valor do 3 na tabela UNICODE
console.log(escola.indexOf('3'))

console.log(escola.substring(1))// começa do 1
console.log(escola.substring(0,3)) // do 0 até 3

console.log("Escola".concat(escola).concat("!"))
console.log(escola.replace(3,'e'))
console.log('ana,maria,pedro'.split(','))