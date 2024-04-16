class Food{
    constructor(position, snakePostionList, maxRows, MaxCols){
        this.maxRows = maxRows
        this.maxCols = MaxCols
        if(position.length != 0){
            this.position = position
        }
        else{
            this.update(snakePostionList)
        }
    }

    getPosition(){
        let currentPosition = this.position
        return currentPosition
    }

    update(snakePostionList){
        console.log(snakePostionList)
        while (true) {
            let newPostion = this.createRandLocation()
            if(!this.checkIfSnakeIsPresent(newPostion, snakePostionList)){
                this.position = newPostion
                break
            }
            continue
        }
    }

    createRandLocation(){
        let row = Math.floor(Math.random() * this.maxRows + 1);
        let col = Math.floor(Math.random() * this.maxCols + 1);
        return [row, col]
    }

    // checkIfSnakeIsPresent(checkPostion, snakePostionList){
    //     snakePostionList.forEach(element => {
    //         console.log("snake" + element[0] + "," + element[1] + "   " + checkPostion[0] + ":" + checkPostion[1])
    //         if(element[0] === checkPostion[0] && element[1] === checkPostion[1]){
    //             console.log("S + F")
    //             return true
    //         }
    //     });
    //     return false
    // }

    checkIfSnakeIsPresent(checkPosition, snakePositionList) {
        for (const element of snakePositionList) {
            console.log(`snake ${element[0]},${element[1]}   ${checkPosition[0]}:${checkPosition[1]}`);
            if (element[0] === checkPosition[0] && element[1] === checkPosition[1]) {
                console.log("S + F");
                return true; // Exit the loop and the function
            }
        }
        return false; // Snake not found
    }
}

export { Food }