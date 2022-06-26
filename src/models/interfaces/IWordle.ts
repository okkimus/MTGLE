import IGameState from "./IGameState";

interface IWordle {
    guessesLeft: (state: IGameState) => number,
    addGuess: (state: IGameState, guess: string) => IGameState,
    checkWinCondition: (state: IGameState) => boolean,
    newGame: () => IGameState
}

export default IWordle;