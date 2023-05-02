import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarviComponent } from './carvi.component';

describe('CarviComponent', () => {
  let component: CarviComponent;
  let fixture: ComponentFixture<CarviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
