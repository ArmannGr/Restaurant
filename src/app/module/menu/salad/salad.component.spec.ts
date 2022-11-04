import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladComponent } from './salad.component';

describe('SaladComponent', () => {
  let component: SaladComponent;
  let fixture: ComponentFixture<SaladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
