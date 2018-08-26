import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFieldComponent } from './big-field.component';

describe('BigFieldComponent', () => {
  let component: BigFieldComponent;
  let fixture: ComponentFixture<BigFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
