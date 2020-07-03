const circle = {
    x: undefined,
    y: undefined,
    dx:2,
    dy:-2,
    radius:13, 

    update:function(){
        this.x+= this.dx//velocity update
        this.y+= this.dy 
        
        if((this.x  +this.dx)  > canvas.width - this.radius  || (this.x + this.dx) < this.radius)//boundary condition
            this.dx = -this.dx
        if((this.y + this.dy) < this.radius){
            this.dy = -this.dy
        }
        else if( this.y > canvas.height ){
            alert("GAME OVER")
            window.location.reload()
            clearInterval(interval)
        }

        for(let i = 0 ; i < col; i++ ){
            for( let j = 0; j < row; j++){
                let b = bricks[i][j]

                if(b.status == 1){
                    if(this.x > b.x && this.x < b.x + b.width && this.y - this.radius > b.y&& this.y - this.radius < b.y + b.height) {
                        this.dy = -this.dy
                        b.status = 0
                        score++
                        if(score == col*row){
                            alert("CONGRATULATIONS,YOU WIN!!")
                            document.location.reload()
                            clearInterval(interval)

                        }
                   }
               }
            }
        }

        if(this.y + this.dy < this.radius ||
            (this.x + this.dx > pallet.x &&
             this.x +this.dx < pallet.x + pallet.width && 
             this.y + this.dy > height - pallet.height- this.radius )
           
        ){
            this.y-=5
            this.dy = -this.dy 

        }
         
   }

   ,
    draw:function (){
        
        context.beginPath()
        context.arc(this.x, this.y,  this.radius, 0, Math.PI*2)
        context.fillStyle = 'red'
        context.fill()
    }
}