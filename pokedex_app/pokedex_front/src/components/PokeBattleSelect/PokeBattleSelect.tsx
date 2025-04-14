import React from 'react';
import PokemonBattleInput from '../PokemonBattleInput/PokemonBattleInput';
import styles from './PokeBattleSelect.module.css';
import { useData } from '../../Context';

const PokeBattleSelect = () => {
  const {
    pokemonAInput,
    setPokemonAInput,
    pokemonBInput,
    setPokemonBInput,
    getPokemonA,
    getPokemonB,
    battle,
  } = useData();

  async function handleSubmitPokemonA(event: React.FormEvent) {
    event.preventDefault();
    if (!pokemonAInput) {
      setPokemonAInput('1');
      await getPokemonA('1');
      return;
    }

    await getPokemonA(pokemonAInput);
  }

  async function handleSubmitPokemonB(event: React.FormEvent) {
    event.preventDefault();
    if (!pokemonBInput) {
      setPokemonBInput('2');
      await getPokemonB('2');
      return;
    }

    await getPokemonB(pokemonBInput);
  }

  return (
    <div className={styles.pokeBattleSelectWrapper}>
      <div className={styles.pokeBattleSelect}>
        <div>
          <form onSubmit={handleSubmitPokemonA}>
            <PokemonBattleInput
              pokemonInput={pokemonAInput}
              setPokemonInput={setPokemonAInput}
            />
          </form>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            battle();
          }}
        >
          battle
        </button>
        <div>
          <form onSubmit={handleSubmitPokemonB}>
            <PokemonBattleInput
              pokemonInput={pokemonBInput}
              setPokemonInput={setPokemonBInput}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PokeBattleSelect;
