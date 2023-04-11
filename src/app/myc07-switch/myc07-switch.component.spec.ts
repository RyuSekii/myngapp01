import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc07SwitchComponent } from './myc07-switch.component';

describe('Myc07SwitchComponent', () => {
  let component: Myc07SwitchComponent;
  let fixture: ComponentFixture<Myc07SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc07SwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc07SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
