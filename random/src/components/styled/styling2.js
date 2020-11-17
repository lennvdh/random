import React from 'react'
import styled, {keyframes} from 'styled-components'
import shcrew from './images/styling2/strawhats.jpg'
import luffy from './images/styling2/luffy.jpeg'
import zoro from './images/styling2/zoro.jpg'

const Luffy = keyframes`
    0% { opacity: 1;}
    50% {opacity: 0;}
    100% {opacity: 1;}
`

const Div = styled.div`
    height: 600px;
    width: 350px;
`

const Img = styled.img`
    height: 100%;
    width: 100%;
    &:hover{
        opacity: 0%;
    }
`

const ImgLuffy = styled.img`
    height: 100%;
    width: 100%;
    position: relative;
    top: -600px;
    z-index: -1;
    animation:  ${Luffy} 5s infinite;
`
const ImgZoro = styled.img`
    height: 100%;
    width: 100%;
    position: relative;
    top: -1200px;
    z-index: -2;
`

export default function Styling2() {
    return (
        <Div>
            <Img src={shcrew} alt="picture"/>
            <ImgLuffy src={luffy}/>
            <ImgZoro src={zoro}/>
        </Div>
    )
}
