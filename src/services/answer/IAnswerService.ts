import GuessResult from "../../models/GuessResult";

interface IAnswerService {
    getCorrect: (guess: string, correct: string) => GuessResult,
}

export default IAnswerService;