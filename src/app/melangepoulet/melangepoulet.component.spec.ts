import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelangepouletComponent } from './melangepoulet.component';

describe('MelangepouletComponent', () => {
  let component: MelangepouletComponent;
  let fixture: ComponentFixture<MelangepouletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelangepouletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelangepouletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
