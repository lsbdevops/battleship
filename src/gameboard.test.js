import Gameboard from './gameboard'

test('Create 1 x 1 gameboard', () => {
    const gameboardTest = new Gameboard(1, 1);
    expect(gameboardTest).toEqual({ height: 1, width: 1, boardCoordinates: [[{ isAttacked: false, ship: null }]] });
})

test('Create 2 x 2 gameboard', () => {
    const gameboardTest = new Gameboard(2, 2);
    expect(gameboardTest).toEqual({
        height: 2, width: 2, boardCoordinates: [
            [{ isAttacked: false, ship: null }, { isAttacked: false, ship: null }],
            [{ isAttacked: false, ship: null }, { isAttacked: false, ship: null }]
        ]
    });
})

test('Create 10 x 10 gameboard (don\'t check coordinates)', () => {
    const gameboardTest = new Gameboard(10, 10);
    expect(gameboardTest).toEqual(expect.objectContaining({ height: 10, width: 10 }));
})

test('Attack coordinates x = 1, y = 1', () => {
    const gameboardTest = new Gameboard(10, 10);
    gameboardTest.receiveAttack(1, 1);
    expect(gameboardTest.boardCoordinates[1][1]).toEqual({ isAttacked: true, ship: null });
})

test('Place ship of length 1 at x = 1, y = 1', () => {
    const gameboardTest = new Gameboard(10, 10);
    gameboardTest.placeShip(1, 1);
    const testShip = { length: 1, hits: 0 }; 
    expect(gameboardTest.boardCoordinates[1][1]).toEqual({ isAttacked: false, ship: testShip });
})

test('Place ship of length 1 at x = 1, y = 1', () => {
    const gameboardTest = new Gameboard(10, 10);
    gameboardTest.placeShip(1, 1);
    const testShip = { length: 1, hits: 0 }; 
    expect(gameboardTest.boardCoordinates[1][1]).toEqual({ isAttacked: false, ship: testShip });
})
