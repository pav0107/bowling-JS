describe('Game', () => {
  let game;
  describe('Adding scores of a roll', () => {
    beforeEach(() => {
      game = new Game();
    });
    it('can add a roll', () => {
      game.add(3);
      expect(game.scores).toEqual([[3]]);
    });
    it('can add two rolls', () => {
      game.add(3);
      game.add(5);
      expect(game.scores).toEqual([[3, 5]]);
    });
    it('can add a new frame', () => {
      game.add(3);
      game.add(5);
      game.add(4);
      expect(game.scores).toEqual([[3, 5], [4]]);
    });
    it('can add a strike', () => {
      game.add(10);
      expect(game.scores).toEqual([[10, 0]]);
    });
    it('can only enter the numbers 0 to 10 on the first roll of a frame', () => {
      expect(game.add(11)).toThrowError('must be a valid number');
    });
  });
});
