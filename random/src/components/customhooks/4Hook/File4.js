import React from 'react'
import useFetch from './useFetch'

export default function File4() {
    const resFetch = useFetch('https://pokeapi.co/api/v2/pokemon/eevee', {isLoading: true, data: null});
    const pokeName = resFetch.data;
    return (
        <div>
            {pokeName}
        </div>
    )
}
