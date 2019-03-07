import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightA330Component } from './flight-a330.component';

describe('FlightA330Component', () => {
  let component: FlightA330Component;
  let fixture: ComponentFixture<FlightA330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightA330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightA330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
