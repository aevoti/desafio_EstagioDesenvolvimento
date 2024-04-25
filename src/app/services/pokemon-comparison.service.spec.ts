import { TestBed } from '@angular/core/testing';

import { PokemonComparisonService } from './pokemon-comparison.service';

describe('PokemonComparisonService', () => {
  let service: PokemonComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
