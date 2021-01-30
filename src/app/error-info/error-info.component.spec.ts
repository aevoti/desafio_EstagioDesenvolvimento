import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInfoComponent } from './error-info.component';

describe('ErrorInfoComponent', () => {
  let component: ErrorInfoComponent;
  let fixture: ComponentFixture<ErrorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
