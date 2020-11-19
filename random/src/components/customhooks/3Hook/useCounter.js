import {useState} from 'react'

export default function useCounter(){
    const [count, setCount] = useState({count: 0})

    function addCount(){
        setCount({count: count.count + 1})
    }

    function minCount(){
        setCount({count: count.count - 1})
    }
    return {count, addCount, minCount};
}