import { Component, OnInit } from '@angular/core';
import {DataService} from '../../common/data.service'
import { IFlight } from '../../shared/interfaces';
@Component({
  selector: 'app-flight-a',
  templateUrl: './flight-a.component.html',
  styleUrls: ['./flight-a.component.scss']
})
export class FlightAComponent implements OnInit {
  private flight: IFlight;
  private flightId: number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.flight = this.dataService.getFlight(this.flightId)
  }

}
