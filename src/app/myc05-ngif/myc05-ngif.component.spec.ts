import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc05NgifComponent } from './myc05-ngif.component';

describe('Myc05NgifComponent', () => {
  let component: Myc05NgifComponent;
  let fixture: ComponentFixture<Myc05NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc05NgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc05NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
