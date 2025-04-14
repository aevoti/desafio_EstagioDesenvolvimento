import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiTags } from '@nestjs/swagger';
import { GetPokemonByIdentifierDto } from './dto/get-pokemon-by-identifier.dto';
import { GetAllPokemonQueryDto } from './dto/get-all-pokemon-query.dto';

@ApiTags('pokemons')
@Controller('pokemon')
@UseInterceptors(CacheInterceptor)
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getAll(@Query() query: GetAllPokemonQueryDto) {
    try {
      const { limit, offset } = query;
      const parsedLimit = limit ? parseInt(limit) : undefined;
      const parsedOffset = offset ? parseInt(offset) : undefined;
      const pokemons = await this.pokemonService.getPokemonList(
        parsedLimit,
        parsedOffset,
      );
      return pokemons;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new BadRequestException('Erro desconhecido.');
      }
    }
  }

  @Get(':identifier')
  async getByIndentifier(@Param() params: GetPokemonByIdentifierDto) {
    try {
      const pokemon = await this.pokemonService.getPokemonDetail(
        params.identifier,
      );
      return pokemon;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new BadRequestException('Erro desconhecido.');
      }
    }
  }
}
