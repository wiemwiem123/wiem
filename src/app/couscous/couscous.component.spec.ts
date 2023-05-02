import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouscousComponent } from './couscous.component';

describe('CouscousComponent', () => {
  let component: CouscousComponent;
  let fixture: ComponentFixture<CouscousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouscousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouscousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
