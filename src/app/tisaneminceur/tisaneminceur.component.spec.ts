import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisaneminceurComponent } from './tisaneminceur.component';

describe('TisaneminceurComponent', () => {
  let component: TisaneminceurComponent;
  let fixture: ComponentFixture<TisaneminceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisaneminceurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisaneminceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
