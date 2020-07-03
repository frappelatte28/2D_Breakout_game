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