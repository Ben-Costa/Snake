export class Board{
    width;
    columns;

    constructor(columns, rows, blockSize){
        this.i = 0
        
        this.columns = columns
        this.rows = rows
        this.blockSize = blockSize

        let board = document.getElementById("board");
        board.rows = this.rows * this.blockSize;
        board.columns = this.columns * this.blockSize;
        
        this.board = board
        this.context = this.board.getContext("2d");
    }

    run(){
        setInterval(this.draw(), 1000/10);
    }

    draw(){
        drawBackground()
        this.drawGrid()
    }

    drawBackground(){        
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.board.columns, this.board.rows);

        this.context.fillStyle = "white";
        this.context.fillRect(this.i * this.blockSize, 0, this.blockSize, this.blockSize);
        
        if(this.i < this.board.columns - 1){
            this.i = this.i + 1
            console.log(this.i)
        }
        else{
            stop()
        }
    }

    drawGrid(){
        this.context.strokeStyle = "green";
        for (let i = 0; i < this.board.rows; i++) {
            this.context.beginPath();
            this.context.moveTo(0, i * this.blockSize);
            this.context.lineTo(this.board.width, i * this.blockSize);
            this.context.stroke();
        }
        for (let j = 0; j < this.board.columns; j++) {
            this.context.beginPath();
            this.context.moveTo(j * this.blockSize, 0);
            this.context.lineTo(j * this.blockSize, this.board.rows);
            this.context.stroke();
        }
    }
}