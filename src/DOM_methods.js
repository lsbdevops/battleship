import { getRandomCoords, getRandomOrientation } from './DOM_helpers';
import Gameboard from './DOM_gameboard';

const SHIPSIZES = [2, 3, 3, 4, 5]
const BOARDLENGTH = 10;

function computer(playersGameboard) {
    let currentMove = null;
    let horiMoves = [];
    let vertMoves = [];
    let direction = null;


    const getRandomXY = () => {
        let [randomX, randomY] = getRandomCoords();

        while (playersGameboard.boardCoordinates[randomX][randomY].isAttacked) {
            [randomX, randomY] = getRandomCoords();
        }

        return [randomX, randomY];
    }

    const getMoves = () => {
        const { x, y } = currentMove;

        if ((x > 0) && !playersGameboard.boardCoordinates[x - 1][y].isAttacked) horiMoves.push([x - 1, y]);
        if ((x + 1 < BOARDLENGTH) && !playersGameboard.boardCoordinates[x + 1][y].isAttacked) horiMoves.push([x + 1, y])
        if ((y > 0) && !playersGameboard.boardCoordinates[x][y - 1].isAttacked) vertMoves.push([x, y - 1])
        if ((y + 1 < BOARDLENGTH) && !playersGameboard.boardCoordinates[x][y + 1].isAttacked) vertMoves.push([x, y + 1])
    }

    const attack = () => {
        let x = null;
        let y = null;

        if (currentMove === null) {
            [x, y] = getRandomXY(); 
        }
        else {
            ({ x, y } = currentMove);
        }

        const shipIsHit = playersGameboard.receiveAttack(x, y);

        if (shipIsHit) {
            currentMove = {x, y};
            getMoves();

            if (direction === 'h') {
                vertMoves = [];
            }
            else if (direction === 'v') {
                horiMoves = [];
            }
        }
        
        if (horiMoves.length > 0) {
            [x, y] = horiMoves.shift();
            currentMove = { x, y };
            direction = 'h';
        }
        else if (vertMoves.length > 0) {
            [x, y] = vertMoves.shift();
            currentMove = { x, y };
            direction = 'v';
        }
        else {
            currentMove = null;
            direction = null;
        }
    }

    return { attack };
}

function isWinner(gameboardOne, gameboardTwo) {
    return (gameboardOne.allShipsSunk() || gameboardTwo.allShipsSunk())
}

function validCoords(x, y, length, orientation, gameboard) {
    if (orientation === 'horizontal') {
        if ((x + length) > BOARDLENGTH) return false;
        for (let i = 0; i < length; i += 1) {
            if (gameboard.boardCoordinates[x + i][y].ship) return false;
        }
    }
    if (orientation === 'vertical') {
        if ((y + length) > BOARDLENGTH) return false;
        for (let i = 0; i < length; i += 1) {
            if (gameboard.boardCoordinates[x][y + i].ship) return false;
        }
    }

    return true;
}

function placeShips(player) {
    for (let i = 0; i < SHIPSIZES.length; i += 1) {
        let [randomX, randomY] = getRandomCoords();
        const randomOrientation = getRandomOrientation();

        while (!validCoords(randomX, randomY, SHIPSIZES[i], randomOrientation, player.gameboard)) {
            [randomX, randomY] = getRandomCoords();
        }

        player.gameboard.placeShip(randomX, randomY, SHIPSIZES[i], randomOrientation);
    }
}

export default function startGame(playerOne, playerTwo) {
    const winnerDialog = document.getElementById('display-winner');
    placeShips(playerOne);
    placeShips(playerTwo);

    const playerOneGameboard = Gameboard(playerOne);
    const playerTwoGameboard = Gameboard(playerTwo);
    const computerAI = computer(playerOne.gameboard);

    playerTwoGameboard.setTurnEvent(() => {
        playerTwoGameboard.createGrid();
        if (isWinner(playerOne.gameboard, playerTwo.gameboard)) {
            winnerDialog.innerHTML = 'Player 1 wins!';
            winnerDialog.showModal();
            return true;
        }

        computerAI.attack();
        playerOneGameboard.createGrid();
        if (isWinner(playerOne.gameboard, playerTwo.gameboard)) {
            winnerDialog.innerHTML = 'Player 2 wins!';
            winnerDialog.showModal();
            return true;
        }

        return false;
    });

    playerOneGameboard.toggleShowShips();
    playerOneGameboard.createGrid();
    playerTwoGameboard.createGrid();
}