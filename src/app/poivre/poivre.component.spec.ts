import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoivreComponent } from './poivre.component';

describe('PoivreComponent', () => {
  let component: PoivreComponent;
  let fixture: ComponentFixture<PoivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
