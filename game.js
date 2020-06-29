let canvas = document.getElementById('canvas');
var context = canvas.getContext('2d')
var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;

canvas.style.background ="blue"



var pallet_width = 90
var pallet_height = 15
var palletX = canvas.width/2
var palletY = canvas.height-pallet_height
var rightPressed = false
var leftPressed = false



var gupdate = function(){
    
    console.log(this)
    //velocity upsate
    this.x+= this.dx
    this.y+= this.dy 

    //boundayry pndn
    
    if((this.x  +this.dx)  > canvas.width - this.radius  || (this.x + this.dx) < this.radius)
        this.dx = -this.dx
    if((this.y + this.dy)>canvas.height - this.radius || (this.y + this.dy) < this.radius)
        this.dy = -this.dy
}

var circle = {
    x: canvas.width/2,
    y: canvas.height-30,
    dx:2,
    dy:-2,
    radius:20,
    update:gupdate,
    draw:function(){
        context.beginPath()
        context.arc(this.x, this.y,  this.radius, 0, Math.PI*2)
        context.fillStyle = 'red'
        context.fill()
    }
}


window.addEventListener('keydown',keyDownHandler)
window.addEventListener('keyup',keyUpHandler)

function keyDownHandler(event){
    console.log("keydown")
    if(event.key == 'Right'|| event.key == 'ArrowRight')
    rightPressed = true

    else if(event.key == 'Left'|| event.key == 'ArrowLeft')
    leftPressed = true
}
function keyUpHandler(event){
    console.log("keyup")
    if(event.key == 'Left'|| event.key == 'ArrowLeft')
    leftPressed = false

    else if(event.key == 'Right'|| event.key == 'ArrowRight')
    rightPressed = false
}

function drawBall(){
    
}
function drawPallet(){
    context.beginPath()
    context.rect(palletX,palletY,pallet_width,pallet_height)
    context.fillStyle = 'black'
    context.fill()
}

circle.update()
// let fn = 
// gupdate.bind(circle)

// fn()
// update()
// function gameLoop(){
//      requestAnimationFrame(gameLoop)

//     context.clearRect(0, 0, canvas.width, canvas.height)
//     drawPallet()
    
//     circle.update()
//     circle.draw()
   
//     if(rightPressed){
//         palletX+= 10
//         console.log("right")
//         if (palletX + pallet_width > canvas.width){
//             palletX = canvas.width - pallet_width
//         }
//     }
//     else if(leftPressed){
//     palletX+= -10
//     if(palletX < 0){
//     palletX = 0
//     }
// }


// }



gameLoop() //inifinte ierate


