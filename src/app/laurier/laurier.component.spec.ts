import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaurierComponent } from './laurier.component';

describe('LaurierComponent', () => {
  let component: LaurierComponent;
  let fixture: ComponentFixture<LaurierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaurierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaurierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
