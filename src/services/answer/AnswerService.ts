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

        for (const l of guess) {
            const letterIndex = correct.indexOf(l, letterTracker.getLastIndex(l)+ 1);
            const isInWord = letterIndex !== -1;
            const isInCorrectPosition = isInWord;
            const letterResult: LetterResult = {
                index: 0,
                letter: l,
                isInWord: isInWord,
                isInCorrectPosition: isInWord,
            }
            result.letters.push(letterResult);
        }
        return result;
    }
}

export default AnswerService;