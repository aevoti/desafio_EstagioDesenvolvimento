import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoncardComponent } from './pokemoncard.component';

describe('PokemoncardComponent', () => {
  let component: PokemoncardComponent;
  let fixture: ComponentFixture<PokemoncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemoncardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemoncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
