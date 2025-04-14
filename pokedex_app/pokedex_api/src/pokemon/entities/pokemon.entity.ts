import { Column, Entity, PrimaryColumn } from 'typeorm';
import { PokemonType, Stat } from '../interfaces/pokemon.interface';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column({ type: 'jsonb' })
  sprites: {
    official_artwork: string;
    showdown: string;
  };

  @Column({ type: 'jsonb' })
  types: PokemonType[];

  @Column({ type: 'jsonb' })
  stats: Stat[];

  @Column()
  nameJapanese: string;

  @Column()
  totalPower: number;
}
