import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAComponent } from './flight-a.component';

describe('FlightAComponent', () => {
  let component: FlightAComponent;
  let fixture: ComponentFixture<FlightAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
