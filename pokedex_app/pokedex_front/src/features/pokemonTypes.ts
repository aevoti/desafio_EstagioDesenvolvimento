export interface PokemonI {
  id: number;

  name: string;

  height: number;

  weight: number;

  sprites: {
    official_artwork: string;
    showdown: string;
  };

  types: PokemonTypes[];

  stats: StatsI[];

  nameJapanese: string;

  totalPower: number;
}

export interface StatsI {
  base_stat: number;
  stat: string;
}

interface PokemonTypes {
  type: string;
}

export interface AllPokemon {
  name: string;
  url: string;
}
