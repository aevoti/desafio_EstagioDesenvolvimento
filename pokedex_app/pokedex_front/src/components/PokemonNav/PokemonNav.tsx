import PokemonInput from '../PokemonInput/PokemonInput';
import { Link } from 'react-router-dom';
import styles from './PokemonNav.module.css';

const PokemonNav = () => {
  return (
    <nav className={`${styles.pokemonNav} container`}>
      <PokemonInput />

      <Link to="/poke-battle">PokeBattle</Link>
    </nav>
  );
};

export default PokemonNav;
