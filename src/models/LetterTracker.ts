interface LastIndices {
    [key: string]: number
}

class LetterTracker implements ILetterTracker {
    lastIndices: LastIndices;
    target: string;

    constructor(target: string) {
        this.target = target;

        this.lastIndices = {};
        for (const l of target) {
            this.lastIndices[l] = -1;
        }
    }

    getLastIndex(letter: string): number {
        const lastIndex = this.lastIndices[letter];
        const newIndex = this.target.indexOf(letter, lastIndex + 1);


        this.lastIndices[letter] = newIndex;

        return lastIndex;
    }
}

interface ILetterTracker {
    lastIndices: any,
    target: string,

    getLastIndex: (letter: string) => number;
}

export default LetterTracker;