import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucrededateComponent } from './sucrededate.component';

describe('SucrededateComponent', () => {
  let component: SucrededateComponent;
  let fixture: ComponentFixture<SucrededateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucrededateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucrededateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
