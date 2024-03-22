const SNAKE_SPEED = 1

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

        let movement = [direction[0] * speed, direction[1] * speed]

        for(let i = this.getSnakeLength() - 2; i >= 0; i--){
            console.log()
            this.snakePositionList[i + 1] = { ...this.snakePositionList[i] }
        }

        this.snakePositionList[0][0] += movement[0]
        this.snakePositionList[0][1] += movement[1]
    }
}



export { Snake }