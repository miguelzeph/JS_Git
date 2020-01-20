// par nome/valor

const saudacao = 'Opa' // Contexto Léxico 1

function exec() {
    const saudacao = "Falaaaa" // contexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    Peso: 90,
    endereco: {
        logradouro: "rua tal tal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
