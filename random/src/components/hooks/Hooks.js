import React from 'react'
import UseReducer from './useReducer/UseReducer';
import Header from './useEffect/Header';
import UseRef from './useRef/UseRef';
import EnableInputField from './useState/EnableInputField';
import Form from './useState/Form';

export default function Hooks() {
    return (
        <div>
            <Header/>
            <UseReducer/>
            <UseRef/>
            <EnableInputField/>
        </div>
    )
}
