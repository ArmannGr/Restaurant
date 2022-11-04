import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntipastaComponent } from './antipasta.component';

describe('AntipastaComponent', () => {
  let component: AntipastaComponent;
  let fixture: ComponentFixture<AntipastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntipastaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntipastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
