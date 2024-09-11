import "./style.css";
import Player from './player'
import renderGameboard from './DOM_methods'

const playerOne = new Player('human');
const playerTwo = new Player('computer');
playerOne.gameboard.placeShip(1, 1, 1);
renderGameboard(playerOne.gameboard);
renderGameboard(playerTwo.gameboard);