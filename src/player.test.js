import Player from './player'

test('Create human player', () => {
    const player = new Player('human');
    expect(player).toEqual(expect.objectContaining({ type: 'human' }));
})

test('Create computer player', () => {
    const player = new Player('computer');
    expect(player).toEqual(expect.objectContaining({ type: 'computer' }));
})

test('Create human player with gameboard', () => {
    const player = new Player('human');
    expect(player).toEqual({type: 'human', gameboard: expect.objectContaining({ height: 10, width: 10 })});
})