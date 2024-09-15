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

function renderGameboard(gameboard, type, nextTurnFunc) {
    // Create wrapper element for gameboard cells.
    const gameboardWrapper = document.createElement('div');
    gameboardWrapper.classList.add('game-board');

    // Create required number of cells and append to wrapper element.
    for (let i = 0; i < gameboard.height; i += 1) {
        for (let j = 0; j < gameboard.width; j += 1) {
            const cell = createCell(gameboard.boardCoordinates[i][j], type)

            if (type === 'attacking') {
                cell.addEventListener('click', () => {
                    gameboard.receiveAttack(i, j);
                    nextTurnFunc();
                    renderGameboard(gameboard, type, nextTurnFunc);
                })
            }
            gameboardWrapper.appendChild(cell);
        } 
    }

    // Add gameboard to DOM.
    document.querySelector(`#${type}`).innerHTML = '';
    document.querySelector(`#${type}`).appendChild(gameboardWrapper); 
}

function nextTurn(playerOneGameboard) {
    computerAttacks(playerOneGameboard);
    renderGameboard(playerOneGameboard, 'ship');
}

export default function startGame(playerOne, playerTwo) {
    // Place ships in default (testing) locations.
    playerOne.gameboard.placeShip(1, 1)
    playerTwo.gameboard.placeShip(3, 5, 3)

    const computersTurn = () => nextTurn(playerOne.gameboard, playerTwo.gameboard);

    // Start game by rendering initial gameboards.
    renderGameboard(playerOne.gameboard, 'ship');
    renderGameboard(playerTwo.gameboard, 'attacking', computersTurn);
}