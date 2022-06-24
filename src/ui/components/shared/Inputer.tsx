import react, { ChangeEvent, useState } from 'react';

interface InputerProps {
    maxLength: number,
    onSubmit: (value: string) => void,
    disabled: boolean
}

const Inputer = ({ maxLength, onSubmit, disabled }: InputerProps) => {
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

export default Inputer;