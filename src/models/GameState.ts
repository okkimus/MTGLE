import Guess from "./Guess";
import IGameState from "./interfaces/IGameState";

class GameState implements IGameState {
    correct: string;
    guesses: Guess[];
    maxGuesses: number;
    isWon: boolean;

    constructor(word: string, maxGuesses: number) {
        this.correct = word;
        this.guesses = [];
        this.maxGuesses = maxGuesses;
        this.isWon = false;
    }
}

export default GameState;