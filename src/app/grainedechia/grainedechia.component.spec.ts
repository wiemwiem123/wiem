import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainedechiaComponent } from './grainedechia.component';

describe('GrainedechiaComponent', () => {
  let component: GrainedechiaComponent;
  let fixture: ComponentFixture<GrainedechiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrainedechiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrainedechiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
