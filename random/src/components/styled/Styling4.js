import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
    position: relative;
    top: -200px;
    height: 170px;
    width: 100%;
    background-color: #3a539b;
`

const TextDiv = styled.div`
    position:relative;
    top: 75px;
    background-color: #ffffff;
    &:hover{
        background-color: #000000;
    }
    
`

const H1 = styled.h1`
    text-align: center;
    font-family: 'Lobster', cursive;
    &:hover{
        color: #ffffff;
        font-family: 'Goldman', cursive;
    }
`

export default function Styling4() {
    return (
        <Div>
            <TextDiv>
                <H1>Styled-Components</H1>
            </TextDiv>
        </Div>
    )
}
