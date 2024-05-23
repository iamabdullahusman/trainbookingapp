import { Component, OnInit , EventEmitter, Output  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  trainsList: any = [];
  selectedTrain: any;
  
  @Output() ticketBooked = new EventEmitter<any>();

  searchObj: any = {
    fromStationId: '',
    toStationId: '',
    dateOfTravel: ''
  };
  stationList: any = [
    { stationID: '1', stationName: 'Karachi' },
    { stationID: '2', stationName: 'Lahore' },
    { stationID: '3', stationName: 'Islamabad' },
    { stationID: '4', stationName: 'Rawalpindi' },
    { stationID: '5', stationName: 'Faisalabad' },
    { stationID: '6', stationName: 'Multan' },
    { stationID: '7', stationName: 'Gujranwala' },
    { stationID: '8', stationName: 'Quetta' },
    { stationID: '9', stationName: 'Peshawar' },
    { stationID: '10', stationName: 'Sialkot' }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchObj.fromStationId = params['fromStationId'];
      this.searchObj.toStationId = params['toStationId'];
      this.searchObj.dateOfTravel = params['dateOfTravel'];
      this.getAllTrains();
    });

  }
 
  
 
  bookingPassengers: any = {
    passengerName: '',
    age: ''
  };
  bokingObj: any = {
    TrainAppBookingPassengers: []
  };
 
  getAllTrains() {
    this.trainsList = [
      {
        trainId: 1,
        trainName: 'Train 1',
        departureTime: '10:00 AM',
        departureStationName: 'Karachi',
        arrivalTime: '04:00 PM',
        arrivalStationName: 'Lahore',
        bookedSeats: 50,
        totalSeats: 100
      },
      {
        trainId: 2,
        trainName: 'Train 2',
        departureTime: '11:00 AM',
        departureStationName: 'Islamabad',
        arrivalTime: '05:00 PM',
        arrivalStationName: 'Peshawar',
        bookedSeats: 75,
        totalSeats: 100
      },
      {
        trainId: 3,
        trainName: 'Train 3',
        departureTime: '12:00 AM',
        departureStationName: 'lahore',
        arrivalTime: '05:00 PM',
        arrivalStationName: 'Peshwar',
        bookedSeats: 75,
        totalSeats: 100
      },
      {
        trainId: 4,
        trainName: 'Train 4',
        departureTime: '1:00 AM',
        departureStationName: 'Pindi',
        arrivalTime: '05:00 PM',
        arrivalStationName: 'Peshwar',
        bookedSeats: 75,
        totalSeats: 100
      },
      {
        trainId: 5,
        trainName: 'Train 5',
        departureTime: '2:00 PM',
        departureStationName: 'lahore',
        arrivalTime: '05:00 PM',
        arrivalStationName: 'Peshwar',
        bookedSeats: 7,
        totalSeats: 10
      },
      {
        trainId: 6,
        trainName: 'Train 6',
        departureTime: '3:00 PM',
        departureStationName: 'Quetta',
        arrivalTime: '05:00 PM',
        arrivalStationName: 'Peshwar',
        bookedSeats: 75,
        totalSeats: 100
      },
      {
        trainId: 7,
        trainName: 'Train 7',
        departureTime: '5:00 AM',
        departureStationName: 'lahore',
        arrivalTime: '05:00 PM',
        arrivalStationName: 'Peshwar',
        bookedSeats: 75,
        totalSeats: 100
      },

    ];

  }
  openBooking(train: any) {
   
    this.selectedTrain = train;
    this.ticketBooked.emit(this.selectedTrain);
   

  }

  AddPassenger() {
    if (this.bookingPassengers.passengerName && this.bookingPassengers.age) {
      this.bokingObj.TrainAppBookingPassengers.push({ ...this.bookingPassengers });
      this.bookingPassengers.passengerName = '';
      this.bookingPassengers.age = '';
    }
  }
  onRemove(sr: any) {
    this.bokingObj.TrainAppBookingPassengers.splice(sr, 1);
  }
  BookTicket() {
    console.log('Booking tickets for train:', this.selectedTrain.trainId);
    console.log('Passengers:', this.bokingObj.TrainAppBookingPassengers);

    
    this.bokingObj.TrainAppBookingPassengers = [];

   
  }


}
