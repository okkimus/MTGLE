import IllegalCharacterError from "../../../models/errors/IllegalCharacterError";
import LetterResult from "../../../models/LetterResult";
import AnswerService from "../../../services/answer/AnswerService";

test('returns correct letters', () => {
    const correct = 'swamp';
    const guess = 'clamp'

    const letterResults = AnswerService.getCorrect(correct, guess).letters;
    const expectedInWordCorrectness = [false, false, true, true, true];
    const expectedInPlaceCorrectness = [false, false, true, true, true];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('ignores guess case', () => {
    const correct = 'swamp';
    const guess = 'CLaMp'

    const letterResults = AnswerService.getCorrect(correct, guess).letters;
    const expectedInWordCorrectness = [false, false, true, true, true];
    const expectedInPlaceCorrectness = [false, false, true, true, true];

    expect(checkLetterResults(letterResults, expectedInWordCorrectness, expectedInPlaceCorrectness)).toBeTruthy();
});

test('ignores correct case', () => {
    const correct = 'SwAmP';
    const guess = 'clamp'

    const letterResults = AnswerService.getCorrect(correct, guess).letters;
    const expectedInWordCorrectness = [false, false, true, true, true];
    const expectedInPlaceCorrectness = [false, false, true, true, true];

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

    letterResults.forEach((r, i) => {
        if (!(r.isInCorrectPosition === inPlaceCorrectness[i]) || !(r.isInWord === inWordCorrectness[i])) {
            return false;
        }
    })
    return true;
}