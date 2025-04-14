export interface AllPokemon {
  results: { name: string; url: string }[];
}

export interface PokemonType {
  type: string;
}

export interface Stat {
  base_stat: number;
  stat: string;
}

export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
      showdown: {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }[];
}

export interface NameJpApiResponse {
  names: {
    language: { name: string };
    name: string;
  }[];
}
