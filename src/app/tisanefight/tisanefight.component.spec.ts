import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisanefightComponent } from './tisanefight.component';

describe('TisanefightComponent', () => {
  let component: TisanefightComponent;
  let fixture: ComponentFixture<TisanefightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisanefightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisanefightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
