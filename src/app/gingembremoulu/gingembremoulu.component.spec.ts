import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GingembremouluComponent } from './gingembremoulu.component';

describe('GingembremouluComponent', () => {
  let component: GingembremouluComponent;
  let fixture: ComponentFixture<GingembremouluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GingembremouluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GingembremouluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
