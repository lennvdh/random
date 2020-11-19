import React from 'react'
import styled, { keyframes } from 'styled-components'

const Breath = keyframes`
    0% {border-radius: 10%}
    50% {border-radius: 40%}
    100%{border-radius: 10%}
`

const Rotate = keyframes`
    0% {transform: Rotate(0deg)}
    100% {transform: Rotate(360deg)}
`

const ChangingColor = keyframes`
    0% {background-color: #2abb9b}
    10% {background-color: #00e640}
    20% {background-color: #4ecdc4}
    30% {background-color: #66cc99}
    30% {background-color: #68c3a3}
    30% {background-color: #00b5cc}
    40% {background-color: #2574a9}
    50% {background-color: #336e7b}
    60% {background-color: #59abe3}
    70% {background-color: #34495e}
    80% {background-color: #22313f}
    90% {background-color: #446cb3}
    100% {background-color: #89c4f4}
`

const Div = styled.div`
    position: relative;
    top: -750px;
    left: 300px;
    height: 50px;
    width: 50px;
    border-radius: 10%;
    background-color: #2abb9b;
    animation: ${Breath} 2s ease-in infinite, ${Rotate} 2s linear infinite, ${ChangingColor} 20s infinite;
    &:hover{
        box-shadow: 3px 3px 3px black;
    }
    &:active{
        animation: ${Breath} 0.5s ease-in infinite, ${Rotate} 0.5s linear infinite, ${ChangingColor} 5s infinite;
    }
`

export default function Styling3() {
    return (
        <Div>
            
        </Div>
    )
}
