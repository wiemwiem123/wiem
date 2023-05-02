import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RashanoutComponent } from './rashanout.component';

describe('RashanoutComponent', () => {
  let component: RashanoutComponent;
  let fixture: ComponentFixture<RashanoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RashanoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RashanoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
