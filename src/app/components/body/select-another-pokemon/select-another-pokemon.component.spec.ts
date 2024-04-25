import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnotherPokemonComponent } from './select-another-pokemon.component';

describe('SelectAnotherPokemonComponent', () => {
  let component: SelectAnotherPokemonComponent;
  let fixture: ComponentFixture<SelectAnotherPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectAnotherPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectAnotherPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
