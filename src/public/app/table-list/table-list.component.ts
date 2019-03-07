import { Component, OnInit } from '@angular/core';

import { DataService } from '../common/data.service';
import { IFlight } from '../shared/interfaces';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  flights: IFlight[];

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.getInitializeFlights();
  }

  getInitializeFlights(): any {
        this.dataService.getFlights()
        .subscribe((response: IFlight[]) => {
          this.flights = response;
        },
        (err: any) => console.log(err),
        () => console.log('getFlight retrieved flight'));
  }

}