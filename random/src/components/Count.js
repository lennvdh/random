import React, { useState } from 'react';
import styled from 'styled-components';

const Counter = styled.div`
    width: 100px;
    height: 185px;
    margin: 50px;
    background-color: #f1f1f1;
`

const Plus = styled.button`
    width: 100px;
    height: 50px;
    background-color: #1f1f1f;
    color: #ffffff;
    font-size: 22px;
`

const Min = styled.button`
    width: 50px;
    height: 50px;
    background-color: #1f1f1f;
    color: #ffffff;
    font-size: 22px;
`

const Clear = styled.button`
    width: 50px;
    height: 50px;
    background-color: #1f1f1f;
    color: #ffffff;
    font-size: 22px;
`

const H1 = styled.h1`
    text-align: center;
`

export default function Count(){

    const [count, setCount] = useState(1)


    const min = () => {
        setCount(count - 1);
    }

    const plus = () => {
        setCount(count + 1)
    }


    const clear = () => {
        setCount(count / count)
    }
    return(
        <>  
            <Counter>
                <Plus onClick={plus}>+</Plus>
                <H1>{count}</H1>
                <Min onClick={min}>-</Min>
                <Clear onClick={clear}>c</Clear>
            </Counter>

        </>
    )
}