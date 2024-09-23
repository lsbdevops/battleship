const SHIPSIZES = [2, 3, 3, 4, 5]
const BOARDLENGTH = 10;


function getRandomCoords() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
}

function computerAttacks(playersGameboard) {
    let [randomX, randomY] = getRandomCoords();

    while (playersGameboard.boardCoordinates[randomX][randomY].isAttacked) {
        [randomX, randomY] = getRandomCoords();
    }
    
    playersGameboard.receiveAttack(randomX, randomY);
}

function createCell(cellData, gameboardType) {
    const cell = document.createElement('div');
    cell.classList.add('game-cell');

    if (cellData.ship && cellData.isAttacked) {
        cell.classList.add('ship-attacked');
    }
    else if (cellData.ship && gameboardType === 'ship') {
        cell.classList.add('ship');
    }
    else if (cellData.isAttacked) {
        cell.classList.add('attacked');
    }

    return cell;
}

function renderGameboard(gameboard, type, nextTurnFunc, eventController) {
    // Create wrapper element for gameboard cells.
    const gameboardWrapper = document.createElement('div');
    gameboardWrapper.classList.add('game-board');
    
    // Attacking event function.
    const cellEventFunc = (x, y) => {
        gameboard.receiveAttack(x, y);
        nextTurnFunc(eventController);
        renderGameboard(gameboard, type, nextTurnFunc, eventController);
    }

    // Create required number of cells and append to wrapper element.
    for (let i = 0; i < gameboard.height; i += 1) {
        for (let j = 0; j < gameboard.width; j += 1) {
            const cell = createCell(gameboard.boardCoordinates[i][j], type)
            
            if (type === 'attacking' && !gameboard.boardCoordinates[i][j].isAttacked) {
                cell.addEventListener('click', () => cellEventFunc(i, j), {signal: eventController.signal})
            }
            gameboardWrapper.appendChild(cell);
        } 
    }

    // Add gameboard to DOM.
    document.querySelector(`#${type}`).innerHTML = '';
    document.querySelector(`#${type}`).appendChild(gameboardWrapper); 
}

function addEventToCells(gameboardData, attackingEvent, nextTurnEvent) {
    // Get all cells on attacking gameboard.
    const cellList = Array.from(document.querySelectorAll('#attacking .game-cell'));
    let cellIndex = 0;

    for (let x = 0; x < gameboardData.width; x += 1) {
        for (let y = 0; y < gameboardData.height; y += 1) {
            // Only add event listener if cell hasn't been previously attacked.
            if (!gameboardData.boardCoordinates[x][y].isAttacked) {
                cellList[cellIndex].addEventListener(() => {
                    attackingEvent(gameboardData, x, y);
                    nextTurnEvent();
                });
            }
            cellIndex += 1;
        }
    }
}

function attackCell(gameboardData, xCoord, yCoord) {
    // Update gameboard object.
    gameboardData.receiveAttack(xCoord, yCoord);
}

function isWinner(playerOneGameboard, playerTwoGameboard) {
    if (playerTwoGameboard.allShipsSunk()) return 1;
    if (playerOneGameboard.allShipsSunk()) return 2;
    return false;
}

function nextTurn(playerOneGameboard, playerTwoGameboard, controller) {
    if (playerTwoGameboard.allShipsSunk()) {
        controller.abort();
        setTimeout(() => alert('Player wins!'), 0);
    }
    computerAttacks(playerOneGameboard);
    renderGameboard(playerOneGameboard, 'ship');
    if (playerOneGameboard.allShipsSunk()) {
        controller.abort();
        setTimeout(() => alert('Computer wins!'), 0);
    }
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

function getRandomOrientation() {
    return ['horizontal', 'vertical'][Math.floor(Math.random() * 2)];
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
    // Place ships in random locations.
    placeShips(playerOne);
    placeShips(playerTwo);

    // Create abort controller for attacking events.
    const eventController = new AbortController();

    // Declare function for computer's turn.
    const computersTurn = () => nextTurn(playerOne.gameboard, playerTwo.gameboard, eventController);

    // Start game by rendering initial gameboards.
    renderGameboard(playerOne.gameboard, 'ship');
    renderGameboard(playerTwo.gameboard, 'attacking', computersTurn, eventController);
}