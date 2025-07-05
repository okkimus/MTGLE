import { MAX_GUESSES } from "./constants/GameSettings";
import GameState from "./GameState";
import Guess from "./Guess";
import IGameState from "./interfaces/IGameState";
import IWordle from "./interfaces/IWordle";
import formatWord from "../services/helpers/FormatWord";

class Wordle implements IWordle {
    guessesLeft(state: IGameState) {
        return state.maxGuesses - state.guesses.length;
    }

    addGuess(state: IGameState, guess: string) {
        const newState = this.cloneState(state);
        if (this.guessesLeft(state) > 0 && !this.checkWinCondition(state)) {
            const guessObject: Guess = {
                guess: guess,
                result: {
                    letters: [],
                }
            }
            newState.guesses.push(guessObject);
        }
        newState.isWon = this.checkWinCondition(newState);
        return newState;
    }

    checkWinCondition(state: IGameState) {
        if (state.guesses.length === 0) {
            return false;
        }
        const lastGuess = state.guesses[state.guesses.length - 1].guess;
        return formatWord(lastGuess) === formatWord(state.correct);
    }

    newGame() {
        const newWord = "SWAMP"
        return new GameState(newWord, MAX_GUESSES);
    }

    cloneState(state: IGameState) {
        const newState = { ...state };
        newState.guesses = [ ...state.guesses ];

        return newState;
    }
}

export default Wordle;