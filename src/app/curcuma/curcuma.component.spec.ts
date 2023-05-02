import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurcumaComponent } from './curcuma.component';

describe('CurcumaComponent', () => {
  let component: CurcumaComponent;
  let fixture: ComponentFixture<CurcumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurcumaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurcumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
