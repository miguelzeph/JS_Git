var canvas, ctx, ALTURA, LARGURA,
g = 9.8, t = 0, dt = 0.001, v0 = -10, teta = Math.PI/4,




chao = {
    y: 550,
    altura:50,
    cor:"#ffdf70",
    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(0,this.y,LARGURA,this.altura);
    }
};

bloco ={
    x:0,
    y:550-chao.altura,
    altura:50,
    largura:50,
    cor:"#ff4e4e",
    v0y:v0*Math.sin(teta),
    v0x:v0*Math.cos(teta),
    
    atualiza: function(){
        // vertical
        this.y += this.v0y + g*t**2/2 ;
        this.v0y +=  -this.v0y*t + g*t;

        /*
        if (this.y > chao.y - this.altura) {
            //this.y = chao.y - this.altura;
            this.v0y = -1*this.v0y;   
        }
        else if (this.v0y == 0) {
            this.v0y = -1*this.v0y;
        }
        */
        //hotizontal
        this.x -= this.v0x;
        

    },

    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
    }
};








function main () {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if (LARGURA >=500 || ALTURA >=500){
        LARGURA = 600;
        ALTURA = 600;
    }

    canvas = document.createElement('canvas');
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    roda();
    

};
















function roda () {
    //ATUALIZA
    t += dt;
    bloco.atualiza();

    //DESENHA--------------
    ctx.fillStyle = "#50beff";
    ctx.fillRect(0,0,LARGURA,ALTURA);
    //DESENHA O BLOCO
    bloco.desenha();
    //DESENHA O CHAO
    chao.desenha();
    //-----------------------

    //console.log(bloco.v0y, t);
    
    if (bloco.y -6 > chao.y - bloco.altura && t >0) {
        window.cancelAnimationFrame(roda);
    }
    else {
        window.requestAnimationFrame(roda);
    };
    

};

main();