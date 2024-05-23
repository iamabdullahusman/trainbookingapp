import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

trainList: any[] = [
  {
    trainName: 'Train 1',
    trainNo: '1234',
    departureDate: new Date(),
    departureStationName: 'Station A',
    arrivalStationName: 'Station B',
    passengerName: 'John Doe',
    age: 30
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  },
  {
    trainName: 'Train 2',
    trainNo: '5678',
    departureDate: new Date(),
    departureStationName: 'Station C',
    arrivalStationName: 'Station D',
    passengerName: 'Jane Smith',
    age: 25
  }
  
  // Add more hardcoded data if needed
];
  

}
