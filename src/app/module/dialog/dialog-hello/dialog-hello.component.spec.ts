import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHelloComponent } from './dialog-hello.component';

describe('DialogHelloComponent', () => {
  let component: DialogHelloComponent;
  let fixture: ComponentFixture<DialogHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
