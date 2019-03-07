import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightA320Component } from './flight-a320.component';

describe('FlightA320Component', () => {
  let component: FlightA320Component;
  let fixture: ComponentFixture<FlightA320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightA320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightA320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
