import { Snake } from "./snake.js"
import { getInputDirection } from "./EventHandler.js"

let lastRenderTime = 0
const gridContainer = document.getElementById('game-board')
let snake = new Snake([[11,10], [12,10], [13,10]])
let start = true

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceRender = (currentTime - lastRenderTime)/250

    if (secondsSinceRender < 1 / snake.getSnakeSpeed()){
        return
    }

    let direction = getInputDirection()    
    console.log(direction)

    if(direction[0] != 0 || direction[1] != 0){
        start = false
    }

    drawSnake(snake)
    drawFood()
    
    if (!start){
        console.log('triggered')
        snake.updateSnakeLocation(direction, 1)
    }

    lastRenderTime = currentTime
}

function drawSnake(snake) {
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