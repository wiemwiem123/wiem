import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiropComponent } from './sirop.component';

describe('SiropComponent', () => {
  let component: SiropComponent;
  let fixture: ComponentFixture<SiropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
