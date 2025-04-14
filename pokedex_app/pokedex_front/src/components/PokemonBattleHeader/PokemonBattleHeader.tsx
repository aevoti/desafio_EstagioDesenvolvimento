import { Link } from 'react-router-dom';
import pokebattle from '../../assets/pokebattle.png';
import styles from './PokemonBattleHeader.module.css';

const PokemonBattleHeader = () => {
  return (
    <header className={styles.pokeBattleHeader}>
      <img src={pokebattle} alt="PokeBattle header" />
      <Link to="/">Pokedex</Link>
    </header>
  );
};

export default PokemonBattleHeader;
