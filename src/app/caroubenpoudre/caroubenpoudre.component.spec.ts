import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroubenpoudreComponent } from './caroubenpoudre.component';

describe('CaroubenpoudreComponent', () => {
  let component: CaroubenpoudreComponent;
  let fixture: ComponentFixture<CaroubenpoudreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaroubenpoudreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroubenpoudreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
