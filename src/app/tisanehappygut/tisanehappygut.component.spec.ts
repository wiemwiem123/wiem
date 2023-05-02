import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisanehappygutComponent } from './tisanehappygut.component';

describe('TisanehappygutComponent', () => {
  let component: TisanehappygutComponent;
  let fixture: ComponentFixture<TisanehappygutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisanehappygutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisanehappygutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
