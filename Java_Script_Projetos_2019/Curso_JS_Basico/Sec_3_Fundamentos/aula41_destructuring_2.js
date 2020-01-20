// No Python : a,b = 10,11 (NÃO EXISTE ISSO EM JS... TEM QUE FAZER IGUAL ABAIXO)
const [a, b] = [10, 11]
console.log(a)
console.log(b)


// Fazendo dois Arrays
const [c, d] = [[1,2,3],[4,5,6]]
console.log(c)
console.log(d)
console.log(d[0])
console.log(d[2])



// Outra forma
const [x, y, z =10] = [1,2]
console.log( x, y, z)