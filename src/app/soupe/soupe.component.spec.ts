import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupeComponent } from './soupe.component';

describe('SoupeComponent', () => {
  let component: SoupeComponent;
  let fixture: ComponentFixture<SoupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
