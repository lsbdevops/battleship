import ship from './ship'

test('Ship of length 1 created', () => {
    const testShip = new ship(1);
    expect(testShip).toEqual({ length: 1 });
})