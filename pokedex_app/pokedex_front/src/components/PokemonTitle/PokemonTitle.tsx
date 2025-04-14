import { useData } from '../../Context';
import styles from './PokemonTitle.module.css';

function PokemonTitle() {
  const { pokemon } = useData();
  if (!pokemon) return <>Carregando...</>;
  return (
    <div className={`${styles.pokemonTitle} column`}>
      <span>#{pokemon.id}</span>
      <h2>{pokemon.name}</h2>
    </div>
  );
}

export default PokemonTitle;
