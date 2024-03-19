// script.js
const blockSize = 25;
const totalRows = 17;
const totalCols = 17;

let board;
let context;
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let speedX = 0;
let speedY = 0;
let snakeBody = [];
let foodX;
let foodY;
let gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = totalRows * blockSize;
    board.width = totalCols * blockSize;
    context = board.getContext("2d");

    setInterval(update, 1000 / 10);
};

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);

    // context.fillStyle = "yellow";
    // context.fillRect(foodX, foodY, blockSize, blockSize);

    // if (snakeX === foodX && snakeY === foodY) {
    //     snakeBody.push([foodX, foodY]);
    //     placeFood();
    // }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

}

