import Board from Board.js

const blockSize = 20;
const totalRows = 17;
const totalCols = 17;


window.onload = function () {
    i = 0

    //create board data object
    gameBoard = new Board()    
    //2d array size of rows and columns
        //handles drawing of board and objects
        //draw snake
        //draw food
        //game over screen
    //create snake object
        //array of dicts
        //direction
        //move
    //create event handler
    //game
        //start game if press button
        //keep score
        //check if dead
        //check if good
        //pass events results to snake

    board = document.getElementById("board");
    board.height = totalRows * blockSize;
    board.width = totalCols * blockSize;
    context = board.getContext("2d");
    
    setInterval(update, 1000/10)

};

function update(){
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "white";
    context.fillRect(i * blockSize, 0, blockSize, blockSize);

    drawGrid()
    
    if(i < totalCols - 1){
        i = i + 1
    }
    else{
        stop()
    }
}

function drawGrid() {
    context.strokeStyle = "green";
    for (let i = 0; i < totalRows; i++) {
        context.beginPath();
        context.moveTo(0, i * blockSize);
        context.lineTo(board.width, i * blockSize);
        context.stroke();
    }
    for (let j = 0; j < totalCols; j++) {
        context.beginPath();
        context.moveTo(j * blockSize, 0);
        context.lineTo(j * blockSize, board.height);
        context.stroke();
    }
}



