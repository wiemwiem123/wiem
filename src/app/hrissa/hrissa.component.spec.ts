import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrissaComponent } from './hrissa.component';

describe('HrissaComponent', () => {
  let component: HrissaComponent;
  let fixture: ComponentFixture<HrissaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrissaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrissaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
