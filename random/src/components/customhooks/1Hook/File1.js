import React, {useState} from 'react'
import styled from 'styled-components'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger';


const InputName = styled.input`
    margin-top: 50px;
`

export default function File1() {
    const [name, setName] = useLocalStorage('name', '');
    useUpdateLogger(name)
    
    return (
        <div>
            <InputName
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="name"
            />
        </div>
    )
}
