import { Type } from './Type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}
