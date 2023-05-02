import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlelimComponent } from './hlelim.component';

describe('HlelimComponent', () => {
  let component: HlelimComponent;
  let fixture: ComponentFixture<HlelimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlelimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HlelimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
