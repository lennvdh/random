import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 150px;
    width: 200px;
    background-color: #f1f1f1;
    margin-left: 200px;
    padding-top: 20px;
    position: absolute;
`
const RandomNumberButton = styled.button`
    width: 200px;
    background-color: #bdc3c7;
`
const Input = styled.input`
    width: 192px;
`

const Result = styled.h2`
    text-align: center;
    font-family: 'Anton', sans-serif;
`


export default function RandomNumberGame(){
    const [randomNumber, setRandomNumber] = useState(0);
    const [chosenNumber, setChosenNumber] = useState('');

    let generator = Math.floor(Math.random() * 100)

    const random = () => {
        setRandomNumber(generator)
    }

    const higherLower = () => {
        if (chosenNumber == randomNumber){
            return 'you got it';
        }else if (chosenNumber < randomNumber){
            return 'higher';
        }else{
            return 'lower'
        }

    }



    return(
        <Div>  
            <RandomNumberButton onClick={random}>Random number generator</RandomNumberButton>
            <br/>
            <form>
                <Input onChange={e => setChosenNumber(e.target.value)}/>
                {console.log(randomNumber)}
                {console.log(chosenNumber)}
                <Result>{higherLower()}</Result>
            </form>

        </Div>
    )
}