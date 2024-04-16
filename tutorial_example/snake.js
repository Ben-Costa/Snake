const SNAKE_SPEED = 1
const GROWTH_RATE = 1

function multiplyArrayElements(arr, multiplier) {
    return arr.map((value) => value * multiplier);
}

class Snake {
    constructor(snakePositionList, snakeSpeed = 1){
        this.snakePositionList = snakePositionList
        this.snakeSpeed = snakeSpeed
    }

    getSnakeSpeed() {
        return this.snakeSpeed
    }

    getSnakePositionList() {
        return this.snakePositionList
    }

    getSnakeLength(){
        return this.getSnakePositionList().length
    }

    updateSnakeLocation(direction, speed) {
        const movement = [direction[0] * speed, direction[1] * speed]
        for(let i = this.getSnakeLength() - 2; i >= 0; i--){
            this.snakePositionList[i + 1] = [ ...this.snakePositionList[i] ];
        }
        this.snakePositionList[0][0] += movement[0]
        this.snakePositionList[0][1] += movement[1]
    }

    grow(){
        let snakePositions = this.getSnakePositionList()
        const lastItem = snakePositions[snakePositions.length - 1];
        const duplicatedItem = { ...lastItem }; // Assuming the items are objects
        snakePositions.push(duplicatedItem);
    }

    snakeEatSelf(){
        let snakePositions = this.getSnakePositionList()
        let head = snakePositions[0]
        for(let i = 1; i < snakePositions.length; i++){
            let body = snakePositions[i]
            if(body[0] === head[0] && body[1] === head[1]){
                return true
            }
        }
        return false
    }
 }


export { Snake }