import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc01BuyCountComponent } from './myc01-buy-count.component';

describe('Myc01BuyCountComponent', () => {
  let component: Myc01BuyCountComponent;
  let fixture: ComponentFixture<Myc01BuyCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc01BuyCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc01BuyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
