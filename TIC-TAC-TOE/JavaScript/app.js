const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let currentRound =1;
let editedPlayer = 0
let activePlayer = 0;
let gameIsOver = false;

const players = [
    {name: '',
    Symbol:'X'
    },
    {
        name:'',
        Symbol:'0'
    }
];

const playerConfigoverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputs = document.getElementById('config-error');
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const InputField = document.getElementById('playername');
const gameOverElement = document.getElementById('game-over');

const editPlayer1Btn = document.getElementById('edit-player-1');
const editPlayer2Btn = document.getElementById('edit-player-2');
const cancelConfigBtn = document.getElementById('cancel-config');
const startNewGameBtn = document.getElementById('start-game-btn');
const gamePlaceHolder = document.getElementById('game-board');
const gameFieldElements = document.querySelectorAll('#game-board li');

editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);
cancelConfigBtn.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);
formElement.addEventListener('submit',savePlayerConfig);
startNewGameBtn.addEventListener('click',startNewGame);


for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click',selectGameField);
}