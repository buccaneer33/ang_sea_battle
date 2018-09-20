import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireLogComponent } from './fire-log.component';

describe('FireLogComponent', () => {
  let component: FireLogComponent;
  let fixture: ComponentFixture<FireLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
