import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Services/data-service.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  Details:any;
  detailsLoaded : boolean=false;
  constructor(private stateService: DataServiceService) { } // we can use stateService as well to get data 

  ngOnInit() {
    this.Details=history.state.data; // getting data from history state, service can also be used to get data
    console.log(history.state.data);
    this.detailsLoaded=true;
  }

}
