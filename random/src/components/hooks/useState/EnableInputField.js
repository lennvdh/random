import React, {useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
    height: 150px;
    width: 200px;
    background-color: #f1f1f1;
    margin-top: 20px;
    margin-left: 400px;
`

const InputName = styled.input`
    width: 192px;
`

const FocusButton = styled.button`
    width: 198px;
    position: absolute;
    bottom: -330px;
`
const H3 = styled.h3`
    font-family: 'Lobster', cursive;
`

export default function EnableInputField() {
    const [name, setName] = useState('');
    const [disable, setDisable] = useState("Disable");
    const [btnText, setBtnText] = useState("Enable");

    const enableBtn = () => {
        if(disable === "Disable"){
            setDisable("");
            setBtnText("Disable");
            return
        }else{
            setDisable("Disable")
            setBtnText("Enable")
        }
    }

    return (
        <Div>
            <InputName disabled={disable} onChange={(e)=> setName(e.target.value)}/>
            <H3>Name: {name}</H3>
            <FocusButton onClick={enableBtn} >{btnText}</FocusButton>
        </Div>
    )
}
