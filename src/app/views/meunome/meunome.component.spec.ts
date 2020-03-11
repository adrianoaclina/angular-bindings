import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeunomeComponent } from './meunome.component';

describe('MeunomeComponent', () => {
  let component: MeunomeComponent;
  let fixture: ComponentFixture<MeunomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeunomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeunomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
