import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  AllPokemon,
  NameJpApiResponse,
  PokemonApiResponse,
} from './interfaces/pokemon.interface';
import { Pokemon } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async getPokemonList(
    limit: number = 1025,
    offset: number = 0,
  ): Promise<AllPokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const response = await firstValueFrom(this.httpService.get(url));
    if (response.status !== 200)
      throw new Error('Não foi possivel retornar a lista de pokemons');
    return response.data as AllPokemon;
  }

  async getPokemonDetail(identifier: string) {
    const isNumeric = !isNaN(Number(identifier));
    const existPokemon = await this.pokemonRepository.findOne({
      where: isNumeric ? [{ id: Number(identifier) }] : [{ name: identifier }],
    });
    if (existPokemon) {
      return existPokemon;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${identifier}`;
    const response = await firstValueFrom(
      this.httpService.get<PokemonApiResponse>(url),
    );

    if (response.status !== 200)
      throw new NotFoundException(`Pokemon ${identifier} não encontrado`);

    const data: PokemonApiResponse = response.data;
    const urlJpName = `https://pokeapi.co/api/v2/pokemon-species/${identifier}`;
    const reponseJpName = await firstValueFrom(
      this.httpService.get<NameJpApiResponse>(urlJpName),
    );
    const nameJpData: NameJpApiResponse = reponseJpName.data;
    const nameJp = nameJpData.names.filter(
      (n) => n.language.name === 'ja-Hrkt',
    );
    const nameJpString = nameJp.map((n) => n.name).join(', ');

    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      sprites: {
        official_artwork: data.sprites.other['official-artwork'].front_default,
        showdown: data.sprites.other.showdown.front_default,
      },
      types: data.types.map((t) => ({ type: t.type.name })),
      stats: data.stats.map((s) => ({
        base_stat: s.base_stat,
        stat: s.stat.name,
      })),
      nameJapanese: nameJpString,
      totalPower: data.stats.reduce(
        (total, currentValue) => total + currentValue.base_stat,
        0,
      ),
    };

    const newPokemon = await this.pokemonRepository.save(pokemon);

    return newPokemon;
  }
}
