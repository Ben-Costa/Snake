export class Board{
    width;
    columns;

    constructor(columns, rows, blockSize){
        this.columns = columns
        this.rows = rows
        this.blockSize

        board = document.getElementById("board");
        board.height = this.rows * blockSize;
        board.width = this.columns * blockSize;
        this.context = board.getContext("2d");
    }

    draw(){
        background
    }
}