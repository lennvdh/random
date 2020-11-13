import React from 'react'
import Count from './Count';
import Greetings from './Greetings';
import RandomNumberGame from './RandomNumberGame';

export default function Home() {
    return (
        <div>
            <Greetings/>
            <RandomNumberGame/>
            <Count/>
        </div>
    )
}
