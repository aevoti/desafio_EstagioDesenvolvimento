import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetAllPokemonQueryDto {
  @ApiPropertyOptional({
    description: 'Quantidade de pokémons a retornar',
    example: 10,
  })
  limit?: string;

  @ApiPropertyOptional({
    description: 'Número de pokémons a pular (paginação)',
    example: 0,
  })
  offset?: string;
}
