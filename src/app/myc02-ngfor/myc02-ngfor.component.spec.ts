import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc02NgforComponent } from './myc02-ngfor.component';

describe('Myc02NgforComponent', () => {
  let component: Myc02NgforComponent;
  let fixture: ComponentFixture<Myc02NgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc02NgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc02NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
