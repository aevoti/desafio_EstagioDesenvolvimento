import { TestBed } from '@angular/core/testing';

import { WeatherstackService } from './weatherstack.service';

describe('WeatherstackService', () => {
  let service: WeatherstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
