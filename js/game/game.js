



var interval = setInterval(gameLoop, 1000/60);

function gameLoop(){
    context.clearRect(0, 0, canvas.width, canvas.height)
  
    circle.draw()
    circle.update()
    pallet.draw()
    pallet.update()
    drawBricks()
    drawScore()

}

function drawBricks(){
    for(let i = 0 ; i < col; i++ ){
        for( let j = 0; j < row; j++){
         bricks[i][j].draw(context)
        }
    }
}

function drawScore() {
    context.font = "16px Arial"
    context.fillStyle = "#772e25"
    context.fillText("Score: "+score,40, 40)
}



