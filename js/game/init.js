var  canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d')
var width = window.innerWidth ;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;
canvas.style.background ="#197278"

var rightPressed = false
var leftPressed = false
const brickwidth = width/6
const brickHeight = 30
const  col = 6 
var  row = 3
var bricks ;
var score = 0

pallet.x = width/2 
pallet.y = height - 20

circle.x = width/6 
circle.y = height/2

CreateBricks()





















function CreateBricks(){
    bricks = giveMe2dArray(col)

    for(let i = 0 ; i < col; i++ ){
        for( let j = 0; j < row; j++){
        let x = i*(brickwidth + 10)
        let y =60 + j*(brickHeight+10)
        bricks[i][j] = new Brick(brickwidth, brickHeight, x, y, )
        }
    }
}


