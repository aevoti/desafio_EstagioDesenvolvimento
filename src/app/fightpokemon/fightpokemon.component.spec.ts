import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightpokemonComponent } from './fightpokemon.component';

describe('FightpokemonComponent', () => {
  let component: FightpokemonComponent;
  let fixture: ComponentFixture<FightpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightpokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
