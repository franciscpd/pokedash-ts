import { Routes, Route } from 'react-router-dom';

import HomeView from '../../views/Home'
import PokemonView from '../../views/Pokemon';
import PesquisaView from '../../views/Pesquisa';
// import Header from '../Header';

import '../../assets/styles/app.scss'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/pokemon/:id" element={<PokemonView />} />
        <Route path="/pesquisa/:termo" element={<PesquisaView />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App
