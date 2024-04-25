import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparapokemonComponent } from './comparapokemon.component';

describe('ComparapokemonComponent', () => {
  let component: ComparapokemonComponent;
  let fixture: ComponentFixture<ComparapokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComparapokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparapokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
