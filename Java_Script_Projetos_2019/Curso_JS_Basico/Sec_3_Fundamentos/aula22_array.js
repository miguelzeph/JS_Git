const valores = [7.7,8.8,9.9]

console.log(valores[0])

valores[4] = Number(10)

// Veja que tenho 3 elementos no array...
//Se eu add um valor no [4]... terei 5 
// pois o array[3] não foi definido...
// lembre-se que começamos sempre do 0 os arrays...
//aarray[0] = primeiro elemento
console.log(valores[4])

console.log(valores.length)

console.log(valores.pop()) // pega e tira o último

delete valores[0]

console.log(valores)
console.log(valores[0])

