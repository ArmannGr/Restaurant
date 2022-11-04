import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortelliniComponent } from './tortellini.component';

describe('TortelliniComponent', () => {
  let component: TortelliniComponent;
  let fixture: ComponentFixture<TortelliniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortelliniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortelliniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
