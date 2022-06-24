import GuessResult from "../../models/GuessResult";
import LetterResult from "../../models/LetterResult";
import LetterTracker from "../../models/LetterTracker";
import formatWord from "../helpers/FormatWord";
import IAnswerService from "./IAnswerService";

const AnswerService: IAnswerService = {
    getCorrect: (guess, correct): GuessResult => {
        guess = formatWord(guess);
        correct = formatWord(correct);

        const letterTracker = new LetterTracker(correct);
        const result: GuessResult = {
            letters: [],
        }

        const splitGuess = guess.split("");

        // First go through and set all the letters in correct places
        splitGuess.forEach((l, i) => {
            const inCorrectPosition = l === correct[i];

            if (inCorrectPosition) {
                letterTracker.hasLeft(l);
            }
            result.letters.push({
                index: i,
                letter: l,
                isInCorrectPosition: inCorrectPosition,
                isInWord: inCorrectPosition,
            })
        })

        // Second go through and set correct letters but in wrong place
        splitGuess.forEach((l, i) => {
            const inCorrectPosition = l === correct[i];

            if (!inCorrectPosition && letterTracker.hasLeft(l)) {
                result.letters[i].isInWord = true;
            }
        })

        return result;
    }
}

export default AnswerService;