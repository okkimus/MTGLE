import IllegalCharacterError from "../../../models/errors/IllegalCharacterError";
import formatWord from "../../../services/helpers/FormatWord";

test('returns word in lowercase', () => {
    const sut = formatWord;

    const word = "HeLlO";
    const expected = "hello";

    expect(formatWord(word)).toBe(expected);
});

test('throws error if word contains other than alphabetical characters', () => {
    testThrow("Hello#");
    // testThrow("He!loo");
    // testThrow("He$lo");
    // testThrow("Hell%");
    // testThrow("'ello");
});

const testThrow = (word) => {
    expect(() => formatWord(word)).toThrow(IllegalCharacterError);
}