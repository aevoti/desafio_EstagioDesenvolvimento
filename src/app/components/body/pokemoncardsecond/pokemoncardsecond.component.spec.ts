import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoncardsecondComponent } from './pokemoncardsecond.component';

describe('PokemoncardsecondComponent', () => {
  let component: PokemoncardsecondComponent;
  let fixture: ComponentFixture<PokemoncardsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemoncardsecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemoncardsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
