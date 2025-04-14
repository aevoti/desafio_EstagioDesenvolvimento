import { useData } from '../../Context';
import style from './PokemonArena.module.css';

const PokemonArena = () => {
  const { pokemonA, pokemonB, battling, winner, tie } = useData();

  return (
    <div className={`${style.pokemonArena} ${battling ? style.battling : ''}`}>
      <div
        className={`${style.pokemon1} ${
          battling || (!winner && !tie)
            ? ''
            : tie
            ? style.tie
            : winner?.name === pokemonA?.name
            ? style.winner
            : style.loser
        }`}
      >
        <div className={style.inverted}>
          {pokemonA && (
            <img src={pokemonA?.sprites.showdown} alt={pokemonA?.name} />
          )}
        </div>
        {!pokemonA && <p>Escolha seu pokemon</p>}
      </div>
      <div
        className={`${style.pokemon2} ${
          battling || (!winner && !tie)
            ? ''
            : tie
            ? style.tie
            : winner?.name === pokemonB?.name
            ? style.winner
            : style.loser
        }`}
      >
        {pokemonB ? (
          <img src={pokemonB?.sprites.showdown} alt={pokemonB?.name} />
        ) : (
          <p>Escolha seu pokemon</p>
        )}
      </div>
    </div>
  );
};

export default PokemonArena;
