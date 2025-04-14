import { useData } from '../../Context';
import PokemonTypeBadge from '../PokemonTypeBadge/PokemonTypeBadge';
import styles from './PokemonStats.module.css';

const PokemonStats = () => {
  const { pokemon } = useData();

  return (
    <div className={styles.pokemonStats}>
      <div className={styles.typeBadge}>
        {pokemon?.types.map((item) => (
          <PokemonTypeBadge pokemonType={item.type} />
        ))}
      </div>
      <h3>Base Stats:</h3>
      <ul>
        {pokemon?.stats.map((item) => (
          <>
            <li key={item.base_stat}>
              {item.stat
                ? item.stat === 'special-attack' ||
                  item.stat === 'special-defense'
                  ? item.stat.replace('special-', 'sp. ')
                  : item.stat
                : ''}
              : {item.base_stat}
            </li>
          </>
        ))}
        <li>total: {pokemon?.totalPower}</li>
      </ul>
    </div>
  );
};

export default PokemonStats;
