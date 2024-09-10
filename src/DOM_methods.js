export default function renderGameboard(gameboard) {
    // Create wrapper element for gameboard cells.
    const gameboardWrapper = document.createElement('div');
    gameboardWrapper.classList.add('game-board');

    // Create required number of cells and append to wrapper element.
    for (let i = 0; i < (gameboard.height * gameboard.width); i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('game-cell');
        gameboardWrapper.appendChild(cell);
    }

    // Add gameboard to DOM.
    document.querySelector('.game-board-container').appendChild(gameboardWrapper);
}