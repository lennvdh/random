import React from 'react'
import useName from './useName'

export default function File6() {

    const [firstName, bindFirstName] = useName('')
    const [lastName, bindLastName] = useName('')


    return (
        <div>
            <input {...bindFirstName}/>
            <input {...bindLastName}/>
            <h1>{firstName} {lastName}</h1>
        </div>
    )
}
