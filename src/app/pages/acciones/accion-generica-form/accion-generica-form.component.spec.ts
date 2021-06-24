import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionGenericaFormComponent } from './accion-generica-form.component';

describe('AccionGenericaFormComponent', () => {
  let component: AccionGenericaFormComponent;
  let fixture: ComponentFixture<AccionGenericaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionGenericaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionGenericaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
