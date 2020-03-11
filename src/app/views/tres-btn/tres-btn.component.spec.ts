import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresBtnComponent } from './tres-btn.component';

describe('TresBtnComponent', () => {
  let component: TresBtnComponent;
  let fixture: ComponentFixture<TresBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
