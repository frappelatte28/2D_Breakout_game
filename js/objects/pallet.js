

const pallet = {
    x:undefined,
    y:undefined,
    width:140,
    height:20,
    dx:10,

    update: function(){
        if(rightPressed){
            this.x+= this.dx
            if (this.x + this.width > canvas.width){
                this.x = canvas.width - this.width
            }
        }
        else if(leftPressed){
        this.x-= this.dx
        if(this.x < 0){
        this.x = 0
        }
    }
    },
    draw:function(){
        // console.log(context ,canvas.width)
        context.beginPath()
        context.rect(this.x,this.y,this.width,this.height)
        context.fillStyle = "197278"
        context.fill()
    }
}