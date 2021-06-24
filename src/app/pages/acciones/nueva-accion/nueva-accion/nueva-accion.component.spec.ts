import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAccionComponent } from './nueva-accion.component';

describe('NuevaAccionComponent', () => {
  let component: NuevaAccionComponent;
  let fixture: ComponentFixture<NuevaAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaAccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
