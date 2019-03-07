import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-flight-a320',
  templateUrl: './flight-a320.component.html',
  styleUrls: ['./flight-a320.component.scss']
})
export class FlightA320Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  editFlight(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }
}
