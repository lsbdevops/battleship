import Ship from './ship'

let testShip1;
let testShip5;

beforeEach(() => {
    testShip1 = new Ship(1);
    testShip5 = new Ship(5);
})

test('Ship of length 1 - created', () => {
    expect(testShip1).toEqual({ length: 1, hits: 0 });
}) 

test('Ship of length 5 - created', () => {
    expect(testShip5).toEqual({ length: 5, hits: 0 });
})

test('Ship of length 1 - hit once', () => {
    testShip1.hit();
    expect(testShip1).toEqual({ length: 1, hits: 1 });
}) 

test('Ship of length 5 - hit once', () => {
    testShip5.hit();
    expect(testShip5).toEqual({ length: 5, hits: 1 });
})

test('Ship of length 1 - not sunk', () => {
    expect(testShip1.isSunk()).toBe(false);
}) 

test('Ship of length 1 - sunk', () => {
    testShip1.hit();
    expect(testShip1.isSunk()).toBe(true);
}) 

test('Ship of length 5 - sunk', () => {
    for (let i = 0; i < 5; i++) {
        testShip5.hit();
    }
    expect(testShip5.isSunk()).toBe(true);
}) 