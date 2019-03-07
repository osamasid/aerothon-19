import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' ;

@Component({
  selector: 'app-flight-a350',
  templateUrl: './flight-a350.component.html',
  styleUrls: ['./flight-a350.component.scss']
})
export class FlightA350Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  editFlight(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }
}
