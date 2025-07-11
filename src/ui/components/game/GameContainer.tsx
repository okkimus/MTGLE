import react, { useState } from 'react'
import Inputter from '../shared/Inputter';
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

            <Inputter
                maxLength={5}
                onSubmit={guess => addGuess(guess)}
                disabled={guesses.length === MAX_GUESSES}/>
        </div>
    )
}

export default GameContainer;