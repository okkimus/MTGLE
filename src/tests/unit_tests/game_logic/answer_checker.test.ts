import IllegalCharacterError from "../../../models/errors/IllegalCharacterError";
import LetterResult from "../../../models/LetterResult";
import AnswerService from "../../../services/answer/AnswerService";

test('returns correct letters', () => {
    const correct = 'swamp';
    const guess = 'clamp'

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [false, false, true, true, true];
    const expectedInPlaceCorrectness = [false, false, true, true, true];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('ignores guess case', () => {
    const correct = 'swamp';
    const guess = 'CLaMp'

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [false, false, true, true, true];
    const expectedInPlaceCorrectness = [false, false, true, true, true];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('ignores correct case', () => {
    const correct = 'SwAmP';
    const guess = 'clamp'

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [false, false, true, true, true];
    const expectedInPlaceCorrectness = [false, false, true, true, true];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('prioritize correct places', () => {
    const correct = 'abaab';
    const guess = 'ababa';

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [true, true, true, true, true];
    const expectedInPlaceCorrectness = [true, true, true, false, false];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('prioritize correct places if non-correct place comes before', () => {
    const correct = 'aaaba';
    const guess = 'baaba';

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [false, true, true, true, true];
    const expectedInPlaceCorrectness = [false, true, true, true, true];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('prioritize correct places if many non-correct places come before', () => {
    const correct = 'aabbb';
    const guess = 'bbabb';

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [true, false, true, true, true];
    const expectedInPlaceCorrectness = [false, false, false, true, true];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('gives correct results with duplicate letters where first isn\'t in place', () => {
    const correct = 'abcbe';
    const guess =   'bwfby';

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [true, false, false, true, false];
    const expectedInPlaceCorrectness = [false, false, false, true, false];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('gives correct letter results', () => {
    const correct = 'aabaa';
    const guess = 'aaaab';

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [true, true, true, true, true];
    const expectedInPlaceCorrectness = [true, true, false, true, false];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('all letter results are false when no hits are made', () => {
    const correct = 'abcde';
    const guess = 'fghij';

    const letterResults = AnswerService.getCorrect(guess, correct).letters;
    const expectedInWordCorrectness = [false, false, false, false, false];
    const expectedInPlaceCorrectness = [false, false, false, false, false];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('throws error if guess has illegal characters', () => {
    const correct = 'swamp';
    const guess = 'te#st'

    expect(() => AnswerService.getCorrect(guess, correct)).toThrow(IllegalCharacterError);
});


const checkLetterResults = (letterResults: LetterResult[], inWordCorrectness: boolean[], inPlaceCorrectness: boolean[]): boolean => {
    if (letterResults.length !== inWordCorrectness.length) {
        return false;
    }

    return letterResults.every((r, i) => (r.isInCorrectPosition === inPlaceCorrectness[i] && r.isInWord === inWordCorrectness[i]));
}