import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFieldComponent } from './small-field.component';

describe('SmallFieldComponent', () => {
  let component: SmallFieldComponent;
  let fixture: ComponentFixture<SmallFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
