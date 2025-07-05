import IllegalCharacterError from "../../../models/errors/IllegalCharacterError";
import formatWord from "../../../services/helpers/FormatWord";

test('returns word in lowercase', () => {
    const sut = formatWord;

    const word = "HeLlO";
    const expected = "hello";

    expect(formatWord(word)).toBe(expected);
});

test.each([
    "Hello#",
    "He!loo",
    "He$lo",
    "Hell%",
    "'ello",
])('throws error if word contains other than alphabetical characters', (word) => {
    testThrow(word);
});

const testThrow = (word) => {
    expect(() => formatWord(word)).toThrow(IllegalCharacterError);
}
