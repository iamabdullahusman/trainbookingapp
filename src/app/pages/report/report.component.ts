import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  bookings = [
    { trainName: 'Train 1', departureTime: '10:00 AM', arrivalTime: '2:00 PM', departureStation: 'Station A', arrivalStation: 'Station B' },
    { trainName: 'Train 2', departureTime: '11:00 AM', arrivalTime: '3:00 PM', departureStation: 'Station C', arrivalStation: 'Station D' },
    // Add more bookings as needed
  ];

  constructor() { }
}
