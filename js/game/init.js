var  canvas 
var context 
var width 
var height



var rightPressed 
var leftPressed 
var  brickwidth 
var brickHeight
var  col 
var  row 
var bricks 
var score 

// pallet.x = width/2 
// pallet.y = height - 20

// circle.x = width/6 
// circle.y = height/2

 var interval

var backgroudMusic 
var  collisionPalletMusic
var gameoverMusic

var gameButton 

 
 function initGame(){

    canvas = document.getElementById('canvas1');
    context = canvas.getContext('2d')
    width = window.innerWidth ;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
    canvas.style.background ="#197278"

    rightPressed = false
    leftPressed = false
    brickwidth = width/6
    brickHeight = 30
    col = 6 
    row = 3
    bricks ;
    score = 0

    pallet.x = width/2 
    pallet.y = height - 20

    circle.x = width/2
    circle.y = height/2
    circle.dx= 2 
    circle.dy = -2 


    backgroudMusic  = new Audio('../../assets/sounds/breakout.mp3') 
    collisionPalletMusic = new Audio ('../../assets/sounds/bleep.mp3')
    gameoverMusic = new Audio ('../../assets/sounds/solid.mp3')

    gameButton = document.querySelector('.intro button')

 }

// sound.addEventListener('loadeddata',handleOnload )

// function handleOnload(){
//     console.log("laoded  in time " , Date.now() - t )
    
// }







    window.addEventListener('beforeunload', function (e) {
        //  confirm("asdfaslkdfk")
        e.returnValue = "asdkfjkasdfk "
        
  });






















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


