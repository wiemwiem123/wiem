import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhamisComponent } from './mhamis.component';

describe('MhamisComponent', () => {
  let component: MhamisComponent;
  let fixture: ComponentFixture<MhamisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhamisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MhamisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
