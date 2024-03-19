class Snake{
    direction;
    postions;

    constructor(direction) {
        //1 = right
        //2 = left
        //3 = up
        //4 = down
        this.direction = direction
        this.postions = [{'x': 25, 'y': 25}]
    }

    move(){
        if (this.direction == 1){
            this.postions[0]['x'] += 1
        }
        else if (this.direction == 2){
            this.postions[0]['x'] -= 1
        }
        else if (this.direction == 3){
            this.postions[0]['x'] += 1
        }
        else if (this.direction == 4){
            this.postions[0]['x'] -= 1
        }
    }

}