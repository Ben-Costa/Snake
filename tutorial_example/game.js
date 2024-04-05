//todo
//1 make food object
//2 check if food is in snake
//3 make duplicate of last item in snake to grow
//4 make logic so food moves
//5 make logic so if snake in snake array will die 
//6 clean up

import { Snake } from "./snake.js"
import { getInputDirection } from "./EventHandler.js"
import { Food } from "./food.js"

let lastRenderTime = 0
const gridContainer = document.getElementById('game-board')
const boardCols = window.getComputedStyle(gridContainer).gridTemplateColumns.split(' ').length;
const boardRows = window.getComputedStyle(gridContainer).gridTemplateRows.split(' ').length;

let snake = new Snake([[11,10],[10,10],[9,10],[8,10],[7,10],[6,10]])
let start = true
let food = new Food([], snake.getSnakePositionList(), boardRows, boardCols)

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceRender = (currentTime - lastRenderTime)/250

    if (secondsSinceRender < 1 / snake.getSnakeSpeed()){
        return
    }

    //get user input
    let direction = getInputDirection()    

    //check if still not started
    if(direction[0] != 0 || direction[1] != 0){
        start = false
    }

    //check if snake eat self
    if(snake.snakeEatSelf()){
        document.getElementById('gameOverMessage').style.display = 'block';
        return 
    }

    if (!start){
        snake.updateSnakeLocation(direction, 1)
    }

    //check if out of bounds
    if (snake.getSnakePositionList()[0][0] < 0 || 
        snake.getSnakePositionList()[0][0] > boardRows ||
        snake.getSnakePositionList()[0][1] < 0 || 
        snake.getSnakePositionList()[0][1] > boardCols){
            document.getElementById('gameOverMessage').style.display = 'block';
            return 
    }

    
   // check if snake eat food
   let foodPosition = food.getPosition()
   let snakePositionList = snake.getSnakePositionList()
    
    if(food.checkIfSnakeIsPresent(foodPosition, snakePositionList)){
        snake.grow()
        food.update(snakePositionList)
    }

    //if eat food grown snake and move food
    drawSnake(snake)
    drawFood(food)


    //check if food 

    lastRenderTime = currentTime
}

function drawSnake(snake) {
    console.log(snake)
    gridContainer.innerHTML = ''
    snake.getSnakePositionList().forEach(element => {
        const drawsnakesnake = document.createElement("div");
        drawsnakesnake.classList.add("grid-item", 'snake'); // Add CSS class if needed
        drawsnakesnake.style.gridColumn = element[0]; // Set column position (1-based index)
        drawsnakesnake.style.gridRow = element[1]; // Set row position (1-based index)
        gridContainer.appendChild(drawsnakesnake);
    });
}

function drawFood(foodobjectt) {
    const foodElement = document.createElement("div");
    console.log("fooditem: ")
    console.log(foodobjectt)
    let postion = foodobjectt.getPosition()
    foodElement.classList.add("grid-item", "food"); // Add CSS class if needed
    foodElement.style.gridColumn = postion[1]; // Set column position (1-based index)
    foodElement.style.gridRow = postion[0]; // Set row position (1-based index)
    gridContainer.appendChild(foodElement);
}

window.requestAnimationFrame(main)