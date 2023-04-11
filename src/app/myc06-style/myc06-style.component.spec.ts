import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc06StyleComponent } from './myc06-style.component';

describe('Myc06StyleComponent', () => {
  let component: Myc06StyleComponent;
  let fixture: ComponentFixture<Myc06StyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc06StyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc06StyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
