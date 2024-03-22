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

    updateSnakeLocation(direction, speed) {
        console.log(this.getSnakePositionList())
        let movement = multiplyArrayElements(direction, speed)
        console.log(movement)

        if (this.getSnakePositionList().length === 1){
            this.getSnakePositionList[0] = head.map((value, index) => value + movement[index]);
        }
        else{
            this.snakePositionList.pop()

            let head = this.snakePositionList[0]
            head = head.map((value, index) => value + movement[index]);
            
            this.snakePositionList.unshift(head)
        }


    }   
}



export { Snake }