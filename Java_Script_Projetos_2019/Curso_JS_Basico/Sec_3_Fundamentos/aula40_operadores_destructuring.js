// foi criado em 2015

// Destruturing - Ele tira da Estrutura (Chaves)

const pessoa = {
    nome: "Ana",
    idade: 28,
    endereco: {
        rua: "Coronel",
        numero: 144
    }
}
// Tire de dentro do objeto (pessoa) os atributos nome e pessoa
// mas ele continua dentro do Objeto... só fica mais facil chamar
const {nome, idade} = pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {rua, numero,cep}} = pessoa
console.log(rua, numero, cep)




