import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagupComponent } from './pagup.component';

describe('PagupComponent', () => {
  let component: PagupComponent;
  let fixture: ComponentFixture<PagupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagupComponent]
    });
    fixture = TestBed.createComponent(PagupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
