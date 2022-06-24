import LetterTracker from "../../../models/LetterTracker";

test('returns true if letter is left', () => {
    const targetWord = "swamp"
    const sut = new LetterTracker(targetWord);

    const actual = sut.hasLeft("p")

    expect(actual).toBeTruthy();
});

test('returns true if letter is left when one is found', () => {
    const targetWord = "pineapple"
    const sut = new LetterTracker(targetWord);

    const letter = "p";
    sut.hasLeft(letter);
    const actual = sut.hasLeft(letter)

    expect(actual).toBeTruthy();
});

test('returns false for letter not in word', () => {
    const targetWord = "pineapple"
    const sut = new LetterTracker(targetWord);

    const letter = "x";
    const actual = sut.hasLeft(letter)

    expect(actual).toBeFalsy();
});


test('returns false when letter is seen more times than it exists', () => {
    const targetWord = "pineapple"
    const sut = new LetterTracker(targetWord);

    const letter = "p";
    sut.hasLeft(letter)
    sut.hasLeft(letter)
    sut.hasLeft(letter)
    const hasFourthLetter = sut.hasLeft(letter)

    expect(hasFourthLetter).toBeFalsy();
});