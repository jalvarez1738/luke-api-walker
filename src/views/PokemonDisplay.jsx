import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonDisplay = () => {

    // state

    const [pokemon, setPokemon] = useState(null)


    const {pokemon_id} = useParams()

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
            .then(res => setPokemon(res.data))
            .catch(error => console.log(error))
    }, [])

  return (
    <fieldset>
        <legend>PokemonDisplay.jsx</legend>
        <h3>{pokemon.name}</h3>
    </fieldset>
  )
}

export default PokemonDisplay