import { getRandomCoords, getRandomOrientation } from './DOM_helpers';

export default function gameboard(player) {
    const gameboard = player.gameboard;
    let showShips = false;

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
    
    const toggleShowShips = () => {
        showShips = !showShips
        return showShips;
    };


    return {renderGrid, toggleShowShips}
}