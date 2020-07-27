import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePageComponent } from './mobile-page.component';

describe('MobilePageComponent', () => {
  let component: MobilePageComponent;
  let fixture: ComponentFixture<MobilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
