import IllegalCharacterError from "../../models/errors/IllegalCharacterError";

const formatWord = (word: string): string => {
    word = word.toLocaleLowerCase("en-US");

    for (const l of word) {
        if (characterWhitelist.indexOf(l) === -1) {
            throw new IllegalCharacterError(word, l);
        }
    }

    return word;
}

const characterWhitelist = "abcdefghijklmnopqrstuvwxyz";

export default formatWord;