import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PokemonInput = styled.input`
    width: 200px;
    height: 30px;
    font-family: 'Anton', sans-serif;
    margin-top: 50px;
    margin-left: 50px;
    position:absolute;
`

const H1 = styled.h1`
    margin-top: 150px;
    margin-left: 620px;
    font-family: 'Lobster', cursive;
    position:relative;
`

const PokeImg = styled.img`
    position: relative;
    margin-top: 100px;
    margin-left: 10px;
`

const Div = styled.div`
    position: relative;
    background-color: #f1f1f1;
    width: 300px;
    height: 400px;
    margin-top: 50px;
    margin-left: 50px;
`
const Heading = styled.div`
    position: absolute;
    margin-top: -300px;
    width: 100%;
    height: 236px;
    background-color: #f1f1f1;
`



export default function Header() {
    const [pokeName, setPokeName] = useState('');
    const [pokemonImg, setPokemonImg] = useState('');

    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    const getData = async () => {
        try{
            const res = await axios.get(url);
            console.log(res.data);
            setPokeName(res.data.name);
            setPokemonImg(res.data.sprites.other.dream_world.front_default);
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    })

    return (
        <div>
            <Heading>
                <H1>{pokeName}</H1>
            </Heading>
            <Div>
                <PokemonInput value={pokeName} onChange={(e) => setPokeName(e.target.value)} placeholder='Pokemon Name'/>
                <br/>
                <PokeImg src={pokemonImg} alt=" "/> 
            </Div>
        </div>
    )
}
