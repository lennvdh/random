import React, { useState} from 'react'
import styled from 'styled-components'

const NameForm = styled.form`
    margin-top: 200px;
`

export default function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
    }




    return (
        <div>
            <NameForm onSubmit={handleSubmit}>
                <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <input value={lastName} onChange={e => setLastName(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>submit</button>
                <h1>{firstName} {lastName}</h1>
            </NameForm>
        </div>
    )
}
