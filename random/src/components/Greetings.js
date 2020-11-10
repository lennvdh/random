import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    height: 100px;
    width: 100%;
    text-align: center;
    background-color: #f1f1f1;
    position: relative;
    margin-top: -30px;
    padding-top: 27px;
`

const Title = styled.h1`
    cursor: pointer;
`
export default function Greetings(){
    const [message, setMessage] = useState('Hello')

    const change = () => {
        if (message === 'Hello') {
            setMessage('Goodbye')    
        }else{
            setMessage('Hello')
        }
    }

    return(
        <>  
            <Div>
                <Title onClick={change}>{message}</Title>
            </Div>
            
        </>
    )
}