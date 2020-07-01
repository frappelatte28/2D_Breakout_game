let canvas = document.getElementById('canvas');
var context = canvas.getContext('2d')
var width = window.innerWidth ;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;

canvas.style.background ="blue"

var rightPressed = false
var leftPressed = false
const brickwidth = width/6
const brickHeight = 30
const col = 6 
const row = 3
var bricks


function giveMe2dArray(c){
    var arr = []
    for(let i = 0 ; i < c ; i++){
        arr[i] = []
    }
    return arr
    }

var circle = {
    x: canvas.width/2,
    y: canvas.height-30,
    dx:2,
    dy:-2,
    radius:20, 
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
                   }
               }
            }
        }

        if(this.y + this.dy < this.radius ||
            (this.x + this.dx > pallet.x &&
             this.x +this.dx < pallet.x + pallet.width && 
             this.y + this.dy > height - pallet.height- this.radius )
           
        )
           this.dy = -this.dy - 2
   }

   ,
    draw:function (){
        context.beginPath()
        context.arc(this.x, this.y,  this.radius, 0, Math.PI*2)
        context.fillStyle = 'red'
        context.fill()
    }
}

var pallet = {
    x:canvas.width/2,
    y:canvas.height-20,
    width:100,
    height:20,
    update: function(){
        if(rightPressed){
            this.x+= 10
            console.log("right")
            if (this.x + this.width > canvas.width){
                this.x = canvas.width - this.width
            }
        }
        else if(leftPressed){
        this.x+= -10
        if(this.x < 0){
        this.x = 0
        }
    }
    },
    draw:function(){
        context.beginPath()
        context.rect(this.x,this.y,this.width,this.height)
        context.fillStyle = 'black'
        context.fill()
    }
}

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
            context.fillStyle = "#0095DD"
            context.fillRect(this.x ,this.y ,this.width ,this.height)
            context.fill()
        }
    }
 }
   
     
    function CreateBricks(){
        bricks = giveMe2dArray(col)

        for(let i = 0 ; i < col; i++ ){
            for( let j = 0; j < row; j++){
            let x = i*(brickwidth + 10)
            let y = j*(brickHeight+10)
            bricks[i][j] = new Brick(brickwidth, brickHeight, x, y, )
            }
        }
    }
    CreateBricks()

    function drawBricks(){
        for(let i = 0 ; i < col; i++ ){
            for( let j = 0; j < row; j++){
             bricks[i][j].draw(context)
            }
        }
    }

window.addEventListener('keydown',keyDownHandler)
window.addEventListener('keyup',keyUpHandler)

function keyDownHandler(event){
    if(event.key == 'Right'|| event.key == 'ArrowRight')
    rightPressed = true

    else if(event.key == 'Left'|| event.key == 'ArrowLeft')
    leftPressed = true
}
function keyUpHandler(event){
    if(event.key == 'Left'|| event.key == 'ArrowLeft')
    leftPressed = false

    else if(event.key == 'Right'|| event.key == 'ArrowRight')
    rightPressed = false
}
function gameLoop(){
    //  requestAnimationFrame(gameLoop)
    context.clearRect(0, 0, canvas.width, canvas.height)
    window.onresize = function(){ 
    location.reload()
     }

    circle.draw()
    circle.update()
    pallet.draw()
    pallet.update()
    drawBricks()

} 
var interval = setInterval(gameLoop, 1000/60);

