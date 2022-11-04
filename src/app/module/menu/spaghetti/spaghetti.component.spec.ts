import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaghettiComponent } from './spaghetti.component';

describe('SpaghettiComponent', () => {
  let component: SpaghettiComponent;
  let fixture: ComponentFixture<SpaghettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaghettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaghettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
