import { getRandomCoords, getRandomOrientation } from './DOM_helpers';
import Gameboard from './DOM_gameboard';

const SHIPSIZES = [2, 3, 3, 4, 5]
const BOARDLENGTH = 10;

function computerAttacks(playersGameboard) {
    let [randomX, randomY] = getRandomCoords();

    while (playersGameboard.boardCoordinates[randomX][randomY].isAttacked) {
        [randomX, randomY] = getRandomCoords();
    }
    
    playersGameboard.receiveAttack(randomX, randomY);
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
    placeShips(playerOne);
    placeShips(playerTwo);

    const playerOneGameboard = Gameboard(playerOne);
    const playerTwoGameboard = Gameboard(playerTwo);

    playerTwoGameboard.setTurnEvent(() => {
        playerTwoGameboard.createGrid();
        if (isWinner(playerOne.gameboard, playerTwo.gameboard)) {
            console.log('player 1 wins!');
            return true;
        }

        computerAttacks(playerOne.gameboard);
        playerOneGameboard.createGrid();
        if (isWinner(playerOne.gameboard, playerTwo.gameboard)) {
            console.log('player 2 wins!');
            return true;
        }

        return false;
    });

    playerOneGameboard.toggleShowShips();
    playerOneGameboard.createGrid();
    playerTwoGameboard.createGrid();
}