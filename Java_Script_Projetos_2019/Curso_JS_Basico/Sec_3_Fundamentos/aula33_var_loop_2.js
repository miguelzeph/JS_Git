const funcs = []

for (var i = 0; i < 10; i++) {

    funcs.push(function(){
        console.log(i)
    })
}
// Problema Histórico com VAR
funcs[2]()
funcs[8]()

