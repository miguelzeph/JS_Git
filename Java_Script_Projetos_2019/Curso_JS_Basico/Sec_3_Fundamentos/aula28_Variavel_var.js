{
    {
        {
            {
                var sera = "Será???"
            }    
        }    
    }
}
// Veja que a variavel com VAR, ela pode ser acessada fora das chaves, pois não é uma FUNCÃO
// Logo, ela é uma Variavel GLOBAL neste caso
console.log(sera)


// Agora veja...
function teste(){
    var local = 123
    console.log(local)
}

teste()
// Não conseguimos acessar o Var LOCAL de fora 
//console.log(local)
