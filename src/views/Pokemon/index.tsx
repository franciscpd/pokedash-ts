import { useCallback, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import api from '../../services/api';
import { Pokemon as PokemonType } from '../../types';

import './styles.scss'

function Pokemon() {
  const [pokemonData, setPokemonData] = useState<PokemonType>()

  const { id } = useParams()

  const fetchPokemon = useCallback(async () => {
    const response = await api.get(`/pokemon/${id}`).then((res) => {
      return res.data
    })

    setPokemonData(response)
  }, [setPokemonData, id]);

  useEffect(() => {
    fetchPokemon()
  }, [fetchPokemon])

  return (
    <>
      <Header />
      <Container fluid="lg" className='pokemon'>
        <h1>{pokemonData?.name}</h1>
        <img src={pokemonData?.sprites.front_default} />
      </Container>
    </>
  )
}

export default Pokemon;