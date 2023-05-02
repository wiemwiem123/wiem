import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreteComponent } from './corete.component';

describe('CoreteComponent', () => {
  let component: CoreteComponent;
  let fixture: ComponentFixture<CoreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
