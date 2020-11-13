import React, {useReducer} from 'react'
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 50px;
    margin-left: 40px;
    height: 120px;
    width: 50px;
    background-color: #f1f1f1;
`

const Button = styled.button`
    width: 50px;
    background-color: #1f1f1f;
    color: #ffffff;
`

const H2 = styled.h2`
    text-align: center;
`


function reducer(state, action){
    if (action.type === 'plus'){
        return {count: state.count + 1}
    }else if (action.type === 'min'){
        return {count: state.count - 1}
    }
    
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    const plus = () => {
        dispatch({type: 'plus'})
    }

    const min = () => {
        dispatch({type: 'min'})
    }

    return (
        <Div>
            <Button onClick={min}>-</Button>
            <H2>{state.count}</H2>
            <Button onClick={plus}>+</Button>
        </Div>
    )
}
