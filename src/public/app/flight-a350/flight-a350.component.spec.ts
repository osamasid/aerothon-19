import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightA350Component } from './flight-a350.component';

describe('FlightA350Component', () => {
  let component: FlightA350Component;
  let fixture: ComponentFixture<FlightA350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightA350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightA350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
