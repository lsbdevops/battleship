import "./style.css";
import Player from './player'
import renderGameboard from './DOM_methods'

const playerOne = new Player('human');
const playerTwo = new Player('computer');
renderGameboard(playerOne.gameboard);
renderGameboard(playerTwo.gameboard);