import Gameboard from './gameboard'

test('Create 10 x 10 gameboard', () => {
    const gameboardTest = new Gameboard(10, 10);
    expect(gameboardTest).toEqual({ height: 10, width: 10 });
})