const chessBoard = () => {
    let board = ""
    for(let i = 0; i < 8; i++){
        for(let i = 0; i < 8; i++){
            if(board.length % 2 == 0){
                board += "#"
            }else{
                board +=" "
            }
        }
        board += "\n"
    }
    console.log(board)
}

chessBoard()