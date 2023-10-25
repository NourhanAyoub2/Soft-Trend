import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaglowComponent } from './paglow.component';

describe('PaglowComponent', () => {
  let component: PaglowComponent;
  let fixture: ComponentFixture<PaglowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaglowComponent]
    });
    fixture = TestBed.createComponent(PaglowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
