import React from 'react'
import useCounter from './useCounter'
import styled from 'styled-components'

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


const H1 = styled.h1`
    text-align: center;
`

export default function File3() {
    const countHook = useCounter();

    return (
        <Counter>
            <Plus onClick={countHook.minCount}>-</Plus>
            <H1>count: {countHook.count.count}</H1>
            <Plus onClick={countHook.addCount}>+</Plus>
        </Counter>
    )
}
