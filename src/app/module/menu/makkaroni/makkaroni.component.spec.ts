import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakkaroniComponent } from './makkaroni.component';

describe('MakkaroniComponent', () => {
  let component: MakkaroniComponent;
  let fixture: ComponentFixture<MakkaroniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakkaroniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakkaroniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
