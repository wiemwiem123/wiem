import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaprikaComponent } from './paprika.component';

describe('PaprikaComponent', () => {
  let component: PaprikaComponent;
  let fixture: ComponentFixture<PaprikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaprikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaprikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
