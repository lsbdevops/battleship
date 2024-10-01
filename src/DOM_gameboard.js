export default function Gameboard(player) {
    const { gameboard } = player;
    let showShips = false;
    let controller = null;
    let turnEvent = null;

    const setTurnEvent = (func) => {
        turnEvent = func;
    }

    const getTurnEventFunc = () => turnEvent();

    const getController = () => controller;

    const createCell = (cellData) => {
        const cell = document.createElement('div');
        cell.classList.add('game-cell');

        if (cellData.ship && cellData.isAttacked) {
            cell.classList.add('ship-attacked');
        }
        else if (cellData.ship && showShips) {
            cell.classList.add('ship');
        }
        else if (cellData.isAttacked) {
            cell.classList.add('attacked');
        }

        return cell;
    }

    const renderGrid = () => {
        // Create wrapper element for gameboard cells.
        const gameboardWrapper = document.createElement('div');
        gameboardWrapper.classList.add('game-board');

        // Create required number of cells and append to wrapper element.
        for (let i = 0; i < gameboard.height; i += 1) {
            for (let j = 0; j < gameboard.width; j += 1) {
                gameboardWrapper.appendChild(createCell(gameboard.boardCoordinates[i][j]));
            } 
        }

        // Add gameboard to DOM.
        const type = showShips ? 'ship' : 'attacking';
        document.querySelector(`#${type}`).innerHTML = '';
        document.querySelector(`#${type}`).appendChild(gameboardWrapper); 
    }

    const addEventToCells = () => {
        if (turnEvent === null) return;

        controller = new AbortController();
        // Get all cells on attacking gameboard.
        const cellList = Array.from(document.querySelectorAll('#attacking .game-cell'));
        let cellIndex = 0;

        for (let x = 0; x < gameboard.width; x += 1) {
            for (let y = 0; y < gameboard.height; y += 1) {
                // Only add event listener if cell hasn't been previously attacked.
                if (!gameboard.boardCoordinates[x][y].isAttacked) {
                    cellList[cellIndex].addEventListener('click', () => {
                        gameboard.receiveAttack(x, y);
                        const endGame = getTurnEventFunc();
                        if (endGame) getController().abort();
                    }, {signal: controller.signal});
                }
                cellIndex += 1;
            }
        }
    }

    const createGrid = () => {
        renderGrid();
        if (!showShips) addEventToCells();
    }
    
    const toggleShowShips = () => {
        showShips = !showShips;
        return showShips;
    };


    return {createGrid, toggleShowShips, setTurnEvent}
}