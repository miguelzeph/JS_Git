// OBJETO NÃO É UM JSON !!!

//Forma 1 - Fazer um OBJETO
const prod1 = {}

prod1.nome = "Celular Ultra Mega"
prod1.preco = 400.00
prod1["Descontos"] = 0.40
prod1.valor = prod1.preco - prod1.preco*prod1.Descontos


console.log(prod1)

// Forma 2 - Fazer um OBJETO
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla:1,
        blibli:2

    }
}

console.log(prod2)

//console.log(prod2.obj.blabla)


// VAMOS FAZER UM JSON = FORMATO TEXTUAL
'{"nome": Miguel, "Idade":28, "Altura": 1.80}'

// OBS: Através de um OBJETO, podemos montar um JSON
