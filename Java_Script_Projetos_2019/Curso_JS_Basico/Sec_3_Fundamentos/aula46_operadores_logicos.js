/*
v e v = v
v e f = f
f e v = f
f e f = v

v ou v = v
v ou f = v
f ou v = v
f ou f = f

// ou ou = ou exclusivo

v xor v = f
v xor f = v
f xor v = v
f xor f = f

//Negação Lógica

!v = f
!f = v

*/

function compras(trabalho1, trabalho2){
    // ou = ||
    const comprarSorvete = trabalho1 || trabalho2
    // e = &&
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    //preciso criar um objeto, pois JS só suporta 1 return
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))