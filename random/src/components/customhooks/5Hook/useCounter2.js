import {useState} from 'react'

export default function useCounter2(){

    const [count, setCount] = useState({count: 0})

    const plus = () => {
        setCount({count: count.count + 1})
    }
    const min = () => {
        setCount({count: count.count - 1})
    }

    return {count, plus, min};
}