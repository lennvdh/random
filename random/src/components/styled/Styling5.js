import React from 'react'
import styled, {keyframes} from 'styled-components'

const Breath = keyframes`
    0% {height: 0px}
    50% {height: 90%}
    100% {height: 0px}
`

const Div = styled.div`
    position: relative;
    top: -900px;
    left: 500px;
    height: 300px;
    width: 600px;
    background-color: #000000;
`

const InnerDiv = styled.div`
    width: 100%;
    background-color: #ffffff;
    animation: ${Breath} 2s ease-out infinite;
    &:active{
        background-color: #3a539b;
    }
`
export default function Styling5() {
    return (
        <Div>
            <InnerDiv>

            </InnerDiv>
        </Div>
    )
}
