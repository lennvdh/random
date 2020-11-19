import React from 'react'
import useInput from './useInput'

export default function File9() {
    const [name, bindName] = useInput('')
    const [lastName, bindLastName] = useInput('')

    return (
        <div>
            <form>
                <div>
                    <label>Name:</label>
                    <input {...bindName}/>
                </div>
                <div>
                    <label>last Name</label>
                    <input {...bindLastName}/>
                </div>
                <h1>{name} {lastName}</h1>
            </form>
        </div>
    )
}
