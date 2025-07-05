import react, { ChangeEvent, useState } from 'react';

interface InputterProps {
    maxLength: number,
    onSubmit: (value: string) => void,
    disabled: boolean
}

const Inputter = ({ maxLength, onSubmit, disabled }: InputterProps) => {
    const [value, setValue] = useState("");

    const handleChange = (e: react.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length <= maxLength) {
            setValue(inputValue);
        }
    }

    const handleKey = (e: react.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value.length === maxLength) {
            onSubmit(value);
            setValue("");
        }
    }

    return <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={e => handleKey(e)}
        disabled={disabled} />
}

export default Inputter;
