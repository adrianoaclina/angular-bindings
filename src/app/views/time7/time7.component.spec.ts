import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Time7Component } from './time7.component';

describe('Time7Component', () => {
  let component: Time7Component;
  let fixture: ComponentFixture<Time7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Time7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Time7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
