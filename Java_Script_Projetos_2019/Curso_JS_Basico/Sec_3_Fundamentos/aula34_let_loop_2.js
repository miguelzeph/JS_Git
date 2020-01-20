const funcs = []

for (let i = 0; i < 10; i++) {
    // push = tipo append do python
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
