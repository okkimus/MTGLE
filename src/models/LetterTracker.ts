interface LetterCounts {
    [key: string]: number
}

class LetterTracker implements ILetterTracker {
    letterCounts: LetterCounts;
    target: string;

    constructor(target: string) {
        this.target = target;

        this.letterCounts = {};
        for (const l of target) {
            if (!this.letterCounts[l]) {
                this.letterCounts[l] = 1
            } else {
                this.letterCounts[l] += 1
            }
        }
    }

    hasLeft(letter: string): boolean {
        if (this.letterCounts[letter]) {
            this.letterCounts[letter] -= 1;
            return true;
        }

        return false;
    }
}

interface ILetterTracker {
    letterCounts: any,
    target: string,

    hasLeft: (letter: string) => boolean;
}

export default LetterTracker;