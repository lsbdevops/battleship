export default class Gameboard {
    constructor(height, width) {
        this.height = height;
        this.width = width;

        const boardCoordinates = new Array(width);
        for (let i = 0; i < boardCoordinates.length; i += 1) {
            boardCoordinates[i] = new Array(height).fill({ ship: null, isAttacked: false })
        }
        this.boardCoordinates = boardCoordinates;
    }

    receiveAttack(x, y) {
        this.boardCoordinates[x][y].isAttacked = true;
    }
}