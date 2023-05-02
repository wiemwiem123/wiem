import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisaneconstipationComponent } from './tisaneconstipation.component';

describe('TisaneconstipationComponent', () => {
  let component: TisaneconstipationComponent;
  let fixture: ComponentFixture<TisaneconstipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisaneconstipationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisaneconstipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
