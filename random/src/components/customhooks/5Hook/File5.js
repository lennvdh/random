import React from 'react'
import useCounter2 from './useCounter2'

export default function File5() {
    const counter = useCounter2();

    return (
        <div>
            <button onClick={counter.min}>-</button>
            <h1>{counter.count.count}</h1>
            <button onClick={counter.plus}>+</button>
        </div>
    )
}
