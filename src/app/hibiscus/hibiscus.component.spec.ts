import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibiscusComponent } from './hibiscus.component';

describe('HibiscusComponent', () => {
  let component: HibiscusComponent;
  let fixture: ComponentFixture<HibiscusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HibiscusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HibiscusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
