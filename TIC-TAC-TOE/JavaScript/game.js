function startNewGame() {
    if(players[0].name ==='' || players[1].name===''){
        alert('please add a valid playername for both players');
        return;
    }
    resetGame();
    gameArea.style.display = 'block';
    activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayer() {
    if(activePlayer == 0){
        activePlayer = 1;
    }
    else{
        activePlayer = 0;
    }

    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if(gameIsOver){
        console.log(gameIsOver);
        return;
    }

    const selectedColumn = +event.target.dataset.col - 1;
    const selectedRow = +event.target.dataset.row - 1;

    if(gameData[selectedRow][selectedColumn]>0){
        alert('please select an empty field');
        return;
    }
    event.target.textContent = players[activePlayer].Symbol;
    event.target.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer+1;
    console.log(gameData);

    const winnerID = checkForGameOver();
    if(winnerID !=0){
        endGame(winnerID);
    }
    console.log(winnerID)
    
    currentRound++;
    switchPlayer();
}

function checkForGameOver(){
    //checking the reows for equality
    for(let i=0;i<3;i++){
        if(gameData[i][0]>0 && gameData[i][0]===gameData[i][1] && gameData[i][1]===gameData[i][2]){
            return gameData[i][0];
        }
    }
    //checking the columns for euality
    for(let i=0;i<3;i++){
        if(gameData[0][i]>0 && gameData[0][i]===gameData[1][i] && gameData[1][i]===gameData[2][i]){
            return gameData[0][i];
        }
    }

    if(gameData[0][0]>0 && gameData[0][0]===gameData[1][1] && gameData[1][1]===gameData[2][2]){
        return gameData[0][0];
    }

    if(gameData[0][2]>0 && gameData[0][2]===gameData[1][1] && gameData[1][1]===gameData[2][0]){
        return gameData[0][0];
    }

    if(currentRound === 9){
        return -1;
    }
    return 0;
}

function endGame(winnerID){
    gameIsOver = true;
    gameOverElement.style.display = 'block';

    if(winnerID>0){
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerID-1].name;
    }
    else{
        gameOverElement.firstElementChild.textContent = "It's a Draw !! ";
    }
}

function resetGame(){
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 'You Won ,<span id="winner-name">PLAYERNAME</span>!';
    gameOverElement.style.display = 'none';
    let gameBoardIndex = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            gamePlaceHolder.children[gameBoardIndex].textContent = '';
            gamePlaceHolder.children[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
        }
    }
    gameIsOver = false;
}
