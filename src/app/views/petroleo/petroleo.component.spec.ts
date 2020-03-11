import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetroleoComponent } from './petroleo.component';

describe('PetroleoComponent', () => {
  let component: PetroleoComponent;
  let fixture: ComponentFixture<PetroleoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetroleoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetroleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
