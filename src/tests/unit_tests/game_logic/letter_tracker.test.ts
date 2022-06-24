import LetterTracker from "../../../models/LetterTracker";

test('gives -1 for not seen letter', () => {
    const targetWord = "pineapple"
    const sut = new LetterTracker(targetWord);

    const expected = -1
    const index = sut.getLastIndex("p")

    expect(index).toBe(expected);
});

test('gives correct index for seen letter', () => {
    const targetWord = "pineapple"
    const sut = new LetterTracker(targetWord);

    const expected = 3;
    const letter = "e";
    sut.getLastIndex(letter)
    const index = sut.getLastIndex(letter)

    expect(index).toBe(expected);
});

test('gives -1 for letter not in word', () => {
    const targetWord = "pineapple"
    const sut = new LetterTracker(targetWord);

    const expected = -1;
    const letter = "x";
    sut.getLastIndex(letter)
    const index = sut.getLastIndex(letter)

    expect(index).toBe(expected);
});


test('gives correct index for letter seen times before', () => {
    const targetWord = "abaabaaabaa"
    const sut = new LetterTracker(targetWord);

    const expected = 4;
    const letter = "b";
    sut.getLastIndex(letter)
    sut.getLastIndex(letter)
    const index = sut.getLastIndex(letter)

    expect(index).toBe(expected);
});