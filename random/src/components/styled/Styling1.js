import React from 'react'
import styled, {keyframes} from 'styled-components'

const ChangingColor = keyframes`
    0% { background-color: #013243};
    10% { background-color: #19b5fe};
    20% { background-color: #22a7f0};
    30% { background-color: #2574a9};
    40% { background-color: #3498db};
    50% { background-color: #4183d7};
    60% { background-color: #52b3d9};
    70% { background-color: #5333ed};
    80% { background-color: #6bb9f0};
    90% { background-color: #c5eff7};
    100% { background-color: #5c97bf};
`
const Epilepsie = keyframes`
        0% {background-color: #000000}
        50% {background-color: #ffffff}
        60% {background-color: #000000}
        100% {background-color: #ffffff}
`


const Div = styled.div`
    margin-left: 50px;
    margin-top: -150px;
    width: 200px;
    height: 200px;
    background-color: #00b5cc;
    &:hover{
        animation-name: ${ChangingColor};
        animation-duration: 5s;
        animation-iteration-count: infinite;
        &:active{
            height: 800px;
            width: 800px;
            animation-name: ${Epilepsie};
            animation-duration: 0.2s;
            animation-iteration-count: infinite;
        }
    }
`


export default function Styling1() {
    return (
        <Div>
            
        </Div>
    )
}
