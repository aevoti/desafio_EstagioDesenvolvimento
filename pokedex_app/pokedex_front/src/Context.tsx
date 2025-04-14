import React from 'react';
import { AllPokemon, PokemonI } from './features/pokemonTypes';
import {
  GET_ALL_POKEMON,
  GET_POKEMON_BY_NAME_OR_ID,
} from './features/pokemonService';

interface ContextType {
  pokemon: PokemonI | null;
  setPokemon: React.Dispatch<React.SetStateAction<PokemonI | null>>;
  pokemonInput: string;
  bgColor: number[];
  setBgColor: React.Dispatch<React.SetStateAction<number[]>>;
  setPokemonInput: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  getPokemon: (name: string) => Promise<void>;
  allPokemons: AllPokemon[];
  pokemonA: PokemonI | null;
  pokemonB: PokemonI | null;
  pokemonAInput: string;
  pokemonBInput: string;
  setPokemonAInput: React.Dispatch<React.SetStateAction<string>>;
  setPokemonBInput: React.Dispatch<React.SetStateAction<string>>;
  getPokemonA: (name: string) => Promise<void>;
  getPokemonB: (name: string) => Promise<void>;
  battle: () => void;
  battling: boolean;
  winner: PokemonI | null;
  tie: boolean;
}

const Context = React.createContext<ContextType | null>(null);

export function useData() {
  const context = React.useContext(Context);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
}

export const ContextGlobal = ({ children }: React.PropsWithChildren) => {
  const [pokemon, setPokemon] = React.useState<PokemonI | null>(null);
  const [pokemonInput, setPokemonInput] = React.useState<string>('1');
  const [bgColor, setBgColor] = React.useState<number[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [pokemonCache, setPokemonCache] = React.useState<
    Record<string, PokemonI>
  >({});
  const [allPokemons, setAllPokemons] = React.useState<AllPokemon[]>([]);
  const [pokemonA, setPokemonA] = React.useState<PokemonI | null>(null);
  const [pokemonB, setPokemonB] = React.useState<PokemonI | null>(null);
  const [pokemonAInput, setPokemonAInput] = React.useState('');
  const [pokemonBInput, setPokemonBInput] = React.useState('');
  const [battling, setBattling] = React.useState(false);
  const [winner, setWinner] = React.useState<PokemonI | null>(null);
  const [tie, setTie] = React.useState(false);

  const getPokemonA = React.useCallback(
    async (name: string): Promise<void> => {
      try {
        if (pokemonA && pokemonA.name === name) return;
        if (pokemonCache[name]) {
          setPokemonA(pokemonCache[name]);
          return;
        }
        setLoading(true);
        const { url, options } = GET_POKEMON_BY_NAME_OR_ID(name);
        const data = await fetch(url, options);
        const response = (await data.json()) as PokemonI;
        if (!data.ok) throw new Error('Pokemon não encontrado');
        setPokemonCache((prev) => ({ ...prev, [name]: response }));
        setPokemonA(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [pokemonCache, pokemonA],
  );

  const battle = () => {
    if (pokemonA && pokemonB) {
      setBattling(true);

      setTimeout(() => {
        if (pokemonA.totalPower > pokemonB.totalPower) {
          setWinner(pokemonA);
        } else if (pokemonA.totalPower < pokemonB.totalPower) {
          setWinner(pokemonB);
        } else {
          setTie(true);
        }

        setBattling(false);

        setTimeout(() => {
          setWinner(null);
          setTie(false);
          setPokemonAInput('');
          setPokemonBInput('');
          setPokemonA(null);
          setPokemonB(null);
        }, 2000);
      }, 2000);
    } else {
      alert('Escolha os dois pokemons!');
    }
  };

  const getPokemonB = React.useCallback(
    async (name: string): Promise<void> => {
      try {
        if (pokemonB && pokemonB.name === name) return;
        if (pokemonCache[name]) {
          setPokemonB(pokemonCache[name]);
          return;
        }
        setLoading(true);
        const { url, options } = GET_POKEMON_BY_NAME_OR_ID(name);
        const data = await fetch(url, options);
        const response = (await data.json()) as PokemonI;
        if (!data.ok) throw new Error('Pokemon não encontrado');
        setPokemonCache((prev) => ({ ...prev, [name]: response }));
        setPokemonB(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [pokemonCache, pokemonB],
  );

  React.useEffect(() => {
    (async () => {
      await getPokemonA('1');
      await getPokemonB('4');
    })();
  }, [getPokemonA, getPokemonB]);
  const getPokemon = React.useCallback(
    async (name: string): Promise<void> => {
      try {
        if (pokemonCache[name]) {
          setPokemon(pokemonCache[name]);
          return;
        }
        setLoading(true);
        const { url, options } = GET_POKEMON_BY_NAME_OR_ID(name);
        const data = await fetch(url, options);
        const response = (await data.json()) as PokemonI;
        if (!data.ok) throw new Error('Pokemon não encontrado');
        setPokemonCache((prev) => ({ ...prev, [name]: response }));
        setPokemon(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [pokemonCache],
  );

  React.useEffect(() => {
    async function getAllPokemons() {
      try {
        const { url, options } = GET_ALL_POKEMON();
        const response = await fetch(url, options);
        const data = await response.json();
        setAllPokemons(data.results);
      } catch (error) {
        console.error('Erro ao buscar pokémons:', error);
      }
    }
    getAllPokemons();
  }, []);

  React.useEffect(() => {
    getPokemon(pokemonInput);
  }, [pokemonInput, getPokemon]);

  const prefetchPokemon = React.useCallback(
    async (id: string): Promise<void> => {
      try {
        if (pokemonCache[id]) return;

        try {
          const { url, options } = GET_POKEMON_BY_NAME_OR_ID(id);
          const data = await fetch(url, options);
          if (!data.ok) return;

          const response = (await data.json()) as PokemonI;

          setPokemonCache((prev) => ({
            ...prev,
            [id]: response,
          }));
        } catch (error) {
          console.error(`Erro ao pré-carregar Pokémon ${id}:`, error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [pokemonCache],
  );

  React.useEffect(() => {
    if (pokemon) {
      const currentId = pokemon.id;

      if (currentId > 1) prefetchPokemon((currentId - 1).toString());
      prefetchPokemon((currentId + 1).toString());
    }
  }, [pokemon, prefetchPokemon]);

  return (
    <Context.Provider
      value={{
        pokemon,
        setPokemon,
        bgColor,
        setBgColor,
        pokemonInput,
        setPokemonInput,
        loading,
        getPokemon,
        allPokemons,
        pokemonA,
        pokemonB,
        pokemonAInput,
        pokemonBInput,
        setPokemonAInput,
        setPokemonBInput,
        getPokemonA,
        getPokemonB,
        battle,
        battling,
        winner,
        tie,
      }}
    >
      {children}
    </Context.Provider>
  );
};
