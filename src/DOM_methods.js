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

export default function renderGameboard(gameboard, type) {
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
                    document.querySelector(`#${type}`).innerHTML = '';
                    renderGameboard(gameboard, type);
                })
            }
            gameboardWrapper.appendChild(cell);
        } 
    }

    // Add gameboard to DOM.
    document.querySelector(`#${type}`).appendChild(gameboardWrapper); 
}

