import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwasserComponent } from './nwasser.component';

describe('NwasserComponent', () => {
  let component: NwasserComponent;
  let fixture: ComponentFixture<NwasserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwasserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwasserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
