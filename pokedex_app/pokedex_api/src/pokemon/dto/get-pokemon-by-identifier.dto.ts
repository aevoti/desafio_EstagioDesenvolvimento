import { ApiProperty } from '@nestjs/swagger';

export class GetPokemonByIdentifierDto {
  @ApiProperty({ description: 'ID ou nome do Pokémon', example: 'pikachu' })
  identifier: string;
}
