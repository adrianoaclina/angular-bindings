import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolheImgComponent } from './escolhe-img.component';

describe('EscolheImgComponent', () => {
  let component: EscolheImgComponent;
  let fixture: ComponentFixture<EscolheImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolheImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolheImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
