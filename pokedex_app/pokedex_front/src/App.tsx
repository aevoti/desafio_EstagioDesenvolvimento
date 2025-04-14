import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useData } from './Context';

import PokemonList from './features/pokemon/pages/PokemonList';
import PokeBattle from './features/pokemon/pages/PokeBattle';

function App() {
  const { bgColor } = useData();
  return (
    <section>
      <div
        className="bg"
        style={{
          background: `rgb(${bgColor.join(',')})`,
          filter: 'saturate(4) contrast(75%)',
        }}
      ></div>

      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/:name" element={<PokemonList />} />
        <Route path="/poke-battle" element={<PokeBattle />} />
      </Routes>
    </section>
  );
}

export default App;
