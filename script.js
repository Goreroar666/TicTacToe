const playerCreator = (name, mark, turn) => {
    return {name, mark, turn};
}

const player1 = playerCreator("Player 1", "X", true);
const player2 = playerCreator("Player 2", "O", false);



const gameBoard = (() => {

    let board = [];
    for (i = 0; i < 9; i++) {
        board.push('');
    };
    const gridSquares = document.querySelector('.squares');
    const container = document.querySelector('.container');
    const message = document.querySelector(".subtext");

    board.forEach((item, index) => {
        const square = document.createElement('div');
        square.className = 'square';
        gridSquares.appendChild(square);
        square.addEventListener('click', function(){ 
        if (player1.turn == true && gameBoard.winner == null
            && square.textContent == '') {
            board[square.target] = player1.mark;
          
            square.textContent = player1.mark;
            square.classList.add("X");
            player1.turn = false;
            player2.turn = true;
            console.log(board);
            message.innerText = "Player 2, make your move.";

        } else if (player2.turn == true && gameBoard.winner == null
            && square.textContent == '') {
           
            board[square.target] = player2.mark;
            
            square.textContent = player2.mark;
            square.classList.add("O")
            player1.turn = true;
            player2.turn = false;
            console.log(board);
            message.innerText = "Player 1, make your move.";
        } else {
            return;
};
});
        });
        
    
    const resetBtn = document.createElement('button');
        resetBtn.classList.add('resetBtn')
        resetBtn.innerText = 'Reset game';
        gridSquares.appendChild(resetBtn);
        resetBtn.addEventListener('click', function() {
            let filledSquares = document.getElementsByClassName("square");
            for (let i = 0; i < filledSquares.length; i++) {
                filledSquares[i].innerText = "";
                filledSquares.classList.remove("X");
                filledSquares.classList.remove("O");
                player1.turn = true;
                player2.turn = false;
                message.innerText = "Player 1, make your move."
            }
            });

        const winningcombinations =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];
    
        
            return {
                board
            };
        
        });
gameBoard();

const gameFlow = (() => { 

const message = document.querySelector(".subtext");

function displayMessages() {
    if (player1.turn) {
        message.innerHTML = "Player 1, make your move.";
    } else {
        message.innerHTML = "Player 2, make your move.";
    }
};

return {
    
}

});


