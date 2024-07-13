import Ship from './ship'

test('Ship of length 1 - created', () => {
    const testShip = new Ship(1);
    expect(testShip).toEqual({ length: 1, hits: 0 });
}) 

test('Ship of length 5 - created', () => {
    const testShip = new Ship(5);
    expect(testShip).toEqual({ length: 5, hits: 0 });
})

test('Ship of length 1 - hit once', () => {
    const testShip = new Ship(1);
    testShip.hit();
    expect(testShip).toEqual({ length: 1, hits: 1 });
}) 

test('Ship of length 5 - hit once', () => {
    const testShip = new Ship(5);
    testShip.hit();
    expect(testShip).toEqual({ length: 5, hits: 1 });
})

test('Ship of length 1 - not sunk', () => {
    const testShip = new Ship(1);
    expect(testShip.isSunk()).toBe(false);
}) 

test('Ship of length 1 - sunk', () => {
    const testShip = new Ship(1);
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
}) 

test('Ship of length 5 - sunk', () => {
    const testShip = new Ship(5);
    for (let i = 0; i < 5; i++) {
        testShip.hit();
    }
    expect(testShip.isSunk()).toBe(true);
}) 