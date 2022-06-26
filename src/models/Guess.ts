import GuessResult from "./GuessResult";

class Guess {
    guess: string;
    result: GuessResult;

    constructor(guess: string, result: GuessResult) {
        this.guess = guess;
        this.result = result;
    }
}

export default Guess;