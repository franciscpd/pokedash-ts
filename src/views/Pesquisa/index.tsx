import { useCallback, useEffect, useState } from 'react';
import { Container, Placeholder } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import api from '../../services/api';
import { Pokemon as PokemonType } from '../../types';

import './styles.scss'

function Pesquisa() {
  const [pokemonData, setPokemonData] = useState<PokemonType>()

  const { termo } = useParams()

  const fetchPokemon = useCallback(async () => {
    const response = await api.get(`/pokemon/${termo}`).then((res) => {
      return res.data
    })

    setPokemonData(response)
  }, [setPokemonData, termo]);

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

export default Pesquisa