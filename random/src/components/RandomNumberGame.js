import React, { useState } from 'react';


export default function RandomNumberGame(){
    const [randomNumber, setRandomNumber] = useState(0);
    const [chosenNumber, setChosenNumber] = useState('');
    let generator = Math.floor(Math.random() * 100)

    const random = () => {
        setRandomNumber(generator)
    }



    return(
        <>  
            <button onClick={random}>Random number generator</button>
            <br/>
            <input onChange={e => setChosenNumber(e.target.value)}/>
            <input onClick={e => setChosenNumber(e.target.value)} type='submit'/>
            {console.log(randomNumber)}
            {console.log(chosenNumber)}
        </>
    )
}