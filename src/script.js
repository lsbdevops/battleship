import "./style.css";
import Player from './player'
import startGame from './DOM_methods'

function newGame() {
    // Create players and start a new game.
    const playerOne = new Player('human');
    const playerTwo = new Player('computer');
    startGame(playerOne, playerTwo);
}

// Reset game button.
document.getElementById('randomise-ships').addEventListener('click', () => newGame());

// Init game once page is loaded.
newGame();