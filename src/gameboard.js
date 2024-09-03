import Ship from './ship'

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

    placeShip(x, y, shipLength = 1, orientation = 'horizontal') {
        const ship = new Ship(shipLength);

        if (shipLength === 1) {
            this.boardCoordinates[x][y].ship = ship;
            return;
        }

        for (let i = 0; i < shipLength; i += 1) {
            if (orientation === 'horizontal') {
                this.boardCoordinates[x + i][y].ship = ship;
            }
            else {
                this.boardCoordinates[x][y + i].ship = ship;
            }
        } 
    }
}