import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcaseComponent } from './upcase.component';

describe('UpcaseComponent', () => {
  let component: UpcaseComponent;
  let fixture: ComponentFixture<UpcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
