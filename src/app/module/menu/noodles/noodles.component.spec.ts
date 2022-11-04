import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodlesComponent } from './noodles.component';

describe('NoodlesComponent', () => {
  let component: NoodlesComponent;
  let fixture: ComponentFixture<NoodlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoodlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
