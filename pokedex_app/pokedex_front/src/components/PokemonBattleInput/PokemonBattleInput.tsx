import React from 'react';
import styles from './PokemonBattleInput.module.css';
import { AllPokemon } from '../../features/pokemonTypes';
import { useData } from '../../Context.tsx';

const PokemonBattleInput = ({
  pokemonInput,
  setPokemonInput,
}: {
  pokemonInput: string;
  setPokemonInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { allPokemons } = useData();
  const [sugestion, setSugestion] = React.useState<AllPokemon[]>([]);

  React.useEffect(() => {
    if (allPokemons.some((pkmn) => pkmn.name.toLowerCase() === pokemonInput)) {
      setSugestion([]);
      return;
    }

    if (pokemonInput.length > 0) {
      const filtered = allPokemons.filter((pkmn) =>
        pkmn.name.toLowerCase().includes(pokemonInput),
      );
      setSugestion(filtered.slice(0, 10));
    } else {
      setSugestion([]);
    }
  }, [allPokemons, pokemonInput]);

  function handleSelect(name: string) {
    setPokemonInput(name);
    setSugestion([]);
  }

  return (
    <section style={{ position: 'relative', zIndex: '3' }}>
      <label className={styles.input}>
        <input
          onChange={({ target }) =>
            setPokemonInput(target.value.trim().toLowerCase())
          }
          value={pokemonInput}
        />
      </label>
      <button
        className={styles.button}
        disabled={!pokemonInput || Number(pokemonInput) === 0}
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
    </section>
  );
};

export default PokemonBattleInput;
