import {useState} from 'react'

export default function useInput(initialState) {
    const [value, setValue] = useState(initialState)

    const bindValue = {
        value,
        onChange: (e) => {
            setValue(e.target.value)
        }
    }

    return [value, bindValue];
}