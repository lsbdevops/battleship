import Ship from './ship'

export default class Gameboard {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.ships = [];

        const boardCoordinates = new Array(width);
        for (let i = 0; i < width; i += 1) {
            boardCoordinates[i] = new Array(height);

            for (let j = 0; j < height; j += 1) {
                const cellData = { ship: null, isAttacked: false };
                boardCoordinates[i][j] = cellData;
            }
        }
        this.boardCoordinates = boardCoordinates;
    }

    receiveAttack(x, y) {
        this.boardCoordinates[x][y].isAttacked = true;
        const shipAtCoords = this.boardCoordinates[x][y].ship;
        if (shipAtCoords) {
            this.boardCoordinates[x][y].ship.hit();
            return true;
        }
        return false;
    }

    placeShip(x, y, shipLength = 1, orientation = 'horizontal') {
        const ship = new Ship(shipLength);
        this.ships.push(ship);

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

    allShipsSunk() {
        return this.ships.every((currentShip) => currentShip.isSunk());
    }
}