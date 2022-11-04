import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagliatelleComponent } from './tagliatelle.component';

describe('TagliatelleComponent', () => {
  let component: TagliatelleComponent;
  let fixture: ComponentFixture<TagliatelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagliatelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagliatelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
