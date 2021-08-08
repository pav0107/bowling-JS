class Game {
  constructor() {
    this.scores = [];
    this.validFirstPins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  add(pins) {
    if (this.isStartOfGame() || this.isFirstRollOfFrame()) {
      console.log(this.validFirstPins.includes(pins));
      if (!this.validFirstPins.includes(pins))
        throw new Error('must be a valid number');

      pins == 10 ? this.scores.push([10, 0]) : this.scores.push([pins]);
    } else {
      this.scores[this.scores.length - 1].push(pins);
    }
  }

  isStartOfGame() {
    return this.scores.length == 0;
  }

  isFirstRollOfFrame() {
    return this.scores[this.scores.length - 1].length == 2;
  }
}
