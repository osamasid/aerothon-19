import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-flight-a330',
  templateUrl: './flight-a330.component.html',
  styleUrls: ['./flight-a330.component.scss']
})
export class FlightA330Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  editFlight(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }
}


