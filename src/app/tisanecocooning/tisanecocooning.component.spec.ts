import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisanecocooningComponent } from './tisanecocooning.component';

describe('TisanecocooningComponent', () => {
  let component: TisanecocooningComponent;
  let fixture: ComponentFixture<TisanecocooningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisanecocooningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisanecocooningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
