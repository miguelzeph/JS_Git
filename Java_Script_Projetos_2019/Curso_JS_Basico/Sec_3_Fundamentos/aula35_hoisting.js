
console.log('a = ', a)

var a = 2

console.log('a = ', a)

// por de baixo dos panos, o JS fez assim:

var c // O JS jogou aqui, sacou?
console.log('c = ', c)

c =2

console.log('c = ', c)
// ---------------------------------------


// Isso também ocorre no Python, quando você 
// Declara Funções... elas podem ser chamadas lá em cima
// antes msm de implementar