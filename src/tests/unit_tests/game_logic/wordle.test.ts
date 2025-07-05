import { MAX_GUESSES } from "../../../models/constants/GameSettings";
import GameState from "../../../models/GameState";
import Wordle from "../../../models/Wordle";

test('adding a guess adds guess to state', () => {
    const state = new GameState("TESTS", 5);
    const sut = new Wordle();

    const newState = sut.addGuess(state, "GUESS");
    expect(newState.guesses.length).toBe(1);
});

test('doesn\'t add a guess when max guess count is reached', () => {
    const state = new GameState("TESTS", 2);
    const sut = new Wordle();

    let newState = sut.addGuess(state, "GUESS");

    newState = sut.addGuess(newState, "ABCDE");

    expect(newState.guesses.length).toBe(2);

    newState = sut.addGuess(newState, "FGHIJ");

    expect(newState.guesses.length).toBe(2);
});

test('sets game state to won if last guess is correct', () => {
    const CORRECT = "TESTS";
    const state = new GameState(CORRECT, 5);
    const sut = new Wordle();

    let newState = sut.addGuess(state, "GUESS");
    expect(newState.isWon).toBeFalsy();

    newState = sut.addGuess(newState, CORRECT);
    expect(newState.isWon).toBeTruthy();
});

test('is case insensitive when checking win condition', () => {
    const CORRECT = 'SWAMP';
    const state = new GameState(CORRECT, 5);
    const sut = new Wordle();

    const newState = sut.addGuess(state, CORRECT.toLowerCase());
    expect(newState.isWon).toBeTruthy();
});

test('returns correct count for guesses left', () => {
    const CORRECT = "TESTS";
    const state = new GameState(CORRECT, 5);
    const sut = new Wordle();
    expect(sut.guessesLeft(state)).toBe(5);
    let newState = sut.addGuess(state, "GUESS");
    expect(sut.guessesLeft(newState)).toBe(4);
    newState = sut.addGuess(newState, CORRECT);
    expect(sut.guessesLeft(newState)).toBe(3);
});

test('newGame returns fresh game state', () => {
    const sut = new Wordle();
    const state = sut.newGame();

    expect(state.guesses.length).toBe(0);
    expect(state.maxGuesses).toBe(MAX_GUESSES);
});