import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumFieldComponent } from './medium-field.component';

describe('MediumFieldComponent', () => {
  let component: MediumFieldComponent;
  let fixture: ComponentFixture<MediumFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
