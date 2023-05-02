import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoriandreComponent } from './coriandre.component';

describe('CoriandreComponent', () => {
  let component: CoriandreComponent;
  let fixture: ComponentFixture<CoriandreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoriandreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoriandreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
