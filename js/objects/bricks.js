class Brick {
    constructor(width , height, x, y){
        this.width = width 
        this.height = height
        this.x = x
        this.y = y
        this.status= 1
    }
    draw(context){
        if(this.status){
            context.fillStyle = "#c44536"
            context.fillRect(this.x ,this.y ,this.width ,this.height)
            context.fill()
        }
    }
 }