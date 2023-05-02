import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanellemouluComponent } from './chanellemoulu.component';

describe('ChanellemouluComponent', () => {
  let component: ChanellemouluComponent;
  let fixture: ComponentFixture<ChanellemouluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanellemouluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanellemouluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
