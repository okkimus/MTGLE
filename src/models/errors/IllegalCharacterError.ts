class IllegalCharacterError extends Error {
    constructor(target: string, illegalCharacter: string) {
        const message = `String ${target} includes illegal character ${illegalCharacter}`;
        super(message);
    }
}

export default IllegalCharacterError;