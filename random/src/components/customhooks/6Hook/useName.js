import {useState} from 'react'

export default function useName(initialState){
    const [value, setValue] = useState(initialState)

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, bind];
}