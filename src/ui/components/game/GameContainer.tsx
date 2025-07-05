import react, { useState } from 'react'
import Inputer from '../shared/Inputer';
import { MAX_GUESSES } from '../../../models/constants/GameSettings';

const GameContainer = () => {
    const [guesses, setGuesses] = useState<string[]>([]);

    const addGuess = (guess: string) => {
        if (guesses.length < MAX_GUESSES) {
            setGuesses([...guesses, guess])
        }
    }

    return (
        <div>
            <div>
                <ul>
                    {
                        guesses.map((g, i) => {
                            return <li key={i}>{ g }</li>
                        })
                    }
                </ul>
            </div>

            <Inputer
                maxLength={5}
                onSubmit={guess => addGuess(guess)}
                disabled={guesses.length === MAX_GUESSES}/>
        </div>
    )
}

export default GameContainer;