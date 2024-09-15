import "./style.css";
import Player from './player'
import startGame from './DOM_methods'

// Create players.
const playerOne = new Player('human');
const playerTwo = new Player('computer');

startGame(playerOne, playerTwo);