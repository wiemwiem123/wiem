import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TisaneserenityComponent } from './tisaneserenity.component';

describe('TisaneserenityComponent', () => {
  let component: TisaneserenityComponent;
  let fixture: ComponentFixture<TisaneserenityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TisaneserenityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TisaneserenityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
