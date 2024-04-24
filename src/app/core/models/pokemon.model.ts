export interface Pokemon {
  id: number,
  name: string,
  gif: string,
  stat: number,
  types: Type[]
}

interface Type {
  slot: number,
  type: {
    name: string
  }
}

interface Stat {
  base: number,
  name: string
}

export interface Pagination {
  count: number,
  next: string,
  previous: string | null,
}

export interface PokemonBattle {
  name: string,
  stat: number,
  gif: string
}

export interface PokemonDetail extends Pokemon{
  baseExperience: number
  stats: Stat[],
}
