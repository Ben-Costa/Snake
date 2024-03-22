import { Snake } from "./snake.js"

let lastRenderTime = 0
const gridContainer = document.getElementById('game-board')

let snake = new Snake([[11,10], [12,10], [13,10]])

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceRender = (currentTime - lastRenderTime)/1000

    if (secondsSinceRender < 1 / snake.getSnakeSpeed()){
        return
    }
    
    drawFood()
    drawSnake(snake)

    console.log('starting snake')
    console.log(snake.getSnakePositionList())

    snake.updateSnakeLocation([-1,1], 1)
    
    console.log('snake updated location')
    console.log(snake.getSnakePositionList())

    // update()
    // draw()


    lastRenderTime = currentTime
    console.log(secondsSinceRender)
}

function drawSnake(snake, removedNode) {
    gridContainer.innerHTML = ''
    snake.getSnakePositionList().forEach(element => {
        const drawsnakesnake = document.createElement("div");
        drawsnakesnake.classList.add("grid-item", 'snake'); // Add CSS class if needed
        drawsnakesnake.style.gridColumn = element[0]; // Set column position (1-based index)
        drawsnakesnake.style.gridRow = element[1]; // Set row position (1-based index)
        gridContainer.appendChild(drawsnakesnake);
    });
}

function drawFood() {
    const food = document.createElement("div");
    food.classList.add("grid-item", "food"); // Add CSS class if needed
    food.style.gridColumn = "20"; // Set column position (1-based index)
    food.style.gridRow = "20"; // Set row position (1-based index)
    gridContainer.appendChild(food);
}

window.requestAnimationFrame(main)