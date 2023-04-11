import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc08NgmodelComponent } from './myc08-ngmodel.component';

describe('Myc08NgmodelComponent', () => {
  let component: Myc08NgmodelComponent;
  let fixture: ComponentFixture<Myc08NgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc08NgmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc08NgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
