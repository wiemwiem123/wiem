import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisanesommeilComponent } from './tisanesommeil.component';

describe('TisanesommeilComponent', () => {
  let component: TisanesommeilComponent;
  let fixture: ComponentFixture<TisanesommeilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisanesommeilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisanesommeilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
