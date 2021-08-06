import Frame from './frame.js';

class Game {
  constructor() {
    this.scores = [];
  }

  add(pins) {
    let frame;
    if ((this.scores = [] || this.scores[-1].length == 2)) {
      frame = new Frame();
      frame.add(pins);
    } else {
      frame.add(pins);
      this.scores.push(frame);
    }
  }
}

export default Game;
