import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc04NgifComponent } from './myc04-ngif.component';

describe('Myc04NgifComponent', () => {
  let component: Myc04NgifComponent;
  let fixture: ComponentFixture<Myc04NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc04NgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc04NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
