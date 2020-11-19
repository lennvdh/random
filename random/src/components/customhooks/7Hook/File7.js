import React from 'react'
import useEnable from './useEnable'

export default function File7() {
    const [disable, btnText, btnDisable] = useEnable();

    return (
        <div>
            <input disabled={disable}/>
            <button onClick={btnDisable}>{btnText}</button>
        </div>
    )
}
