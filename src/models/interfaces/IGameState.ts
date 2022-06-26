import Guess from "../Guess";

interface IGameState {
    correct: string,
    guesses: Guess[],
    maxGuesses: number,
    isWon: boolean,
}

export default IGameState;