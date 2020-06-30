let canvas = document.getElementById('canvas');
var context = canvas.getContext('2d')
var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;

canvas.style.background ="blue"

var rightPressed = false
var leftPressed = false

var circle = {
    x: canvas.width/2,
    y: canvas.height-30,
    dx:2,
    dy:-2,
    radius:20,
    update:function(){
        //velocity update
    this.x+= this.dx
    this.y+= this.dy 
    //boundary condition
    if((this.x  +this.dx)  > canvas.width - this.radius  || (this.x + this.dx) < this.radius)
        this.dx = -this.dx
    if((this.y + this.dy) < this.radius){
        this.dy = -this.dy
    }
    else if( this.y > canvas.height - this.radius){
        alert("GAME OVER")
        window.location.reload()
        clearInterval(interval)
    }
    },
    draw:function(){
        context.beginPath()
        context.arc(this.x, this.y,  this.radius, 0, Math.PI*2)
        context.fillStyle = 'red'
        context.fill()
    }
}
var pallet= {
    x:canvas.width/2,
    y:canvas.height-10,
    width:90,
    height:10,
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
    },
}
var create = {
    width:80,
    height:30,
    padding:5,
    row:4,
    column:5,
    offsetTop:30,
    offsetLeft:30,
    // brick: []
    brickX: this.width + this.padding+ this.offsetLeft,
    brickY: this.height + this.padding+ this.offsetTop,
    bricks : function() {
        var brick = []
        for (var r = 0; r < this.row; r++){
        this.brick[r] = {}
        for (var c = 0; c < this.column; c++ )
        this.brick[r][c] = {}
        }
    },
    draw: function() {
        for(var r = 0; r < this.row; r++){
            for(var c = 0; c< this.column; c++){
                this.brick[r][c] = this.brickX
                this.brick[r][c] = this.brickY
                context.beginPath()
                context.rect(this.brickX,this.brickY,this.width,this.height)
                context.fillStyle = "#2b2d42"
                context.fill()
            }
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
    create.bricks()
    create.draw()
}
var interval = setInterval(gameLoop, 15);
gameLoop() //inifinte iterate


