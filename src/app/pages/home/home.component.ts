import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}
searchCriteriaEmitter = new EventEmitter<any>();
travelObj: any ={
  fromStationId:'',
    toStationId:'',
    dateOfTravel:''
};

stationList: any = {
  fromStations: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Gujranwala', 'Quetta', 'Peshawar', 'Sialkot'],
  toStations: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Gujranwala', 'Quetta', 'Peshawar', 'Sialkot']
};
onSearch()
{
  this.router.navigate(['pages/search'], {
    queryParams: {
      fromStationId: this.travelObj.fromStationId,
      toStationId: this.travelObj.toStationId,
      dateOfTravel: this.travelObj.dateOfTravel
    }
  });
}
}

