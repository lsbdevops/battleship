import ship from './ship'

test('Ship of length 1 created', () => {
    const testShip = new ship(1);
    expect(testShip).toEqual({ length: 1, hits: 0 });
}) 

test('Ship of length 5 created', () => {
    const testShip = new ship(5);
    expect(testShip).toEqual({ length: 5, hits: 0 });
})

