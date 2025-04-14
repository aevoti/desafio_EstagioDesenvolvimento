import React from 'react';
import { useData } from '../../Context';
import styles from './PokemonInput.module.css';
import { AllPokemon } from '../../features/pokemonTypes';

const PokemonInput = () => {
  const [pokemon, setPokemon] = React.useState('');
  const { getPokemon, allPokemons } = useData();
  const [sugestion, setSugestion] = React.useState<AllPokemon[]>([]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!pokemon) {
      setPokemon('1');
      await getPokemon('1');
      return;
    }
    setSugestion([]);
    await getPokemon(pokemon);
  }

  React.useEffect(() => {
    if (allPokemons.some((pkmn) => pkmn.name.toLowerCase() === pokemon)) {
      setSugestion([]);
      return;
    }

    if (pokemon.length > 0) {
      const filtered = allPokemons.filter((pkmn) =>
        pkmn.name.toLowerCase().includes(pokemon),
      );
      setSugestion(filtered.slice(0, 10));
    } else {
      setSugestion([]);
    }
  }, [allPokemons, pokemon]);

  function handleSelect(name: string) {
    setPokemon(name);
    setSugestion([]);
  }

  return (
    <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: '3' }}>
      <label className={styles.input}>
        <input
          onChange={({ target }) =>
            setPokemon(target.value.trim().toLowerCase())
          }
          value={pokemon}
        />
      </label>
      <button
        className={styles.button}
        disabled={!pokemon || Number(pokemon) === 0}
      >
        Go!
      </button>
      {sugestion.length > 0 && (
        <ul className={styles.sugestions}>
          {sugestion.map((s) => (
            <li key={s.name} onClick={() => handleSelect(s.name)}>
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default PokemonInput;
