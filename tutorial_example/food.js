class Food{
    constructor(position, snakePostionList, maxRows, MaxCols){
        this.maxRows = maxRows
        this.maxCols = MaxCols
        if(position.length != 0){
            this.position = position
            console.log(this.position)
        }
        else{
            this.update(snakePostionList)
            console.log("positionnull: "+ this.position)
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
            console.log("new postion")
            console.log(newPostion)
            if(this.checkIfSnakeIsPresent(newPostion, snakePostionList)){
                continue
            }
            this.position = newPostion
            break
        }
    }

    createRandLocation(){
        let row = Math.floor(Math.random() * this.maxRows);
        let col = Math.floor(Math.random() * this.maxRows);
        return [row, col]
    }

    checkIfSnakeIsPresent(checkPostion, snakePostionList){
        console.log("1 " + checkPostion)
        console.log("2" + snakePostionList)
        snakePostionList.forEach(element => {
            if(element[0] == checkPostion[0] && element[0] == checkPostion[0]){
                return true
            }
        });
        return false
    }
}

export { Food }