var canvas, ctx, ALTURA, LARGURA,
g = 9.8, t = 0, dt = 0.01, v0 = 5,




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
    y:0,
    altura:50,
    largura:50,
    cor:"#ff4e4e",
    v0y:v0,
    v0x:v0,
    
    atualiza: function(){

        if (this.y > chao.y - this.altura) {
            
            this.v0y = -1*this.v0y;
        }

        else if (this.y < 0) {
            
            this.v0y = -1*this.v0y;
         
        }
        
        else if (this.x + this.largura > LARGURA) {

            this.v0x = -1*this.v0x;
        }

        else if (this.x < 0) {

            this.v0x = -1*this.v0x;
        };
        
        //hotizontal
        this.x += this.v0x;
        // vertical
        this.y += this.v0y ;
        

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

    
    window.requestAnimationFrame(roda);
    
    

};

main();