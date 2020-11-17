import React, {useRef, useState} from 'react'
import styled from 'styled-components';

const Div = styled.div`
    height: 150px;
    width: 200px;
    background-color: #f1f1f1;
    margin-top: -570px;
    margin-left: 400px;
`

const InputName = styled.input`
    width: 192px;
`

const FocusButton = styled.button`
    width: 198px;
    position: absolute;
    bottom: -160px;
`
const H3 = styled.h3`
    font-family: 'Lobster', cursive;
`

export default function UseRef() {
    const [name, setName] = useState('');
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    }



    return (
        <Div>
            <InputName ref={inputRef} onChange={(e)=> setName(e.target.value)}/>
            <H3>Name: {name}</H3>
            <FocusButton onClick={focus}>Focus</FocusButton>
        </Div>
    )
}
