import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuminComponent } from './cumin.component';

describe('CuminComponent', () => {
  let component: CuminComponent;
  let fixture: ComponentFixture<CuminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
