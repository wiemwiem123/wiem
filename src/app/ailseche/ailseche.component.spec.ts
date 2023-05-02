import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilsecheComponent } from './ailseche.component';

describe('AilsecheComponent', () => {
  let component: AilsecheComponent;
  let fixture: ComponentFixture<AilsecheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilsecheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AilsecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
