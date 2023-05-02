import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisaneimmuniteComponent } from './tisaneimmunite.component';

describe('TisaneimmuniteComponent', () => {
  let component: TisaneimmuniteComponent;
  let fixture: ComponentFixture<TisaneimmuniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisaneimmuniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisaneimmuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
