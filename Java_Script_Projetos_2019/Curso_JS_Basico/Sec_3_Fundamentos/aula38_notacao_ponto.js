console.log(Math.ceil(6.1)) // arredondar pra cima

const obj1 = {}

obj1.nome = "Miguel"
obj1['Idade'] = 28

console.log(obj1)


function Personagem(nome,classe, hp, mp, atk){
    this.nome = nome
    this.classe = classe
    this.hp = hp
    this.mp = mp
    this.atk = atk

    // Nosso Método (Func dentro de uma Classe no Python)
    this.magia = function(){
        magic = this.atk*this.mp/100
        console.log(magic)
        return magic
    }
}

//Criando meus Objetos
const pers1 = new Personagem("Miguel", "Knight", 250, 30,30)
const pers2 = new Personagem("Priscila", "Druid", 80, 400,15)

console.log(pers1.hp)


//pers1.hp = pers1.hp - pers2.magia()
//mais bonito assim:
pers1.hp += - pers2.magia()


console.log(pers1.hp)