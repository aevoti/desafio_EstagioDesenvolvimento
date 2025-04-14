import { useParams } from 'react-router-dom';
import PokemonData from '../../../components/PokemonData/PokemonData';
import PokemonStats from '../../../components/PokemonStats/PokemonStats';
import PokemonTitle from '../../../components/PokemonTitle/PokemonTitle';
import Slider from '../../../components/Slider/Slider';
import { useData } from '../../../Context';
import React from 'react';
import PokemonNav from '../../../components/PokemonNav/PokemonNav';

const PokemonList = () => {
  const { setPokemonInput } = useData();
  const { name } = useParams();

  React.useEffect(() => {
    if (name) {
      setPokemonInput(name);
    }
  }, [name, setPokemonInput]);

  return (
    <section>
      <Slider />
      <div className="wrapper container">
        <PokemonTitle />
        <PokemonData />
        <PokemonStats />
      </div>
      <PokemonNav />
    </section>
  );
};

export default PokemonList;
