import { Component, OnInit, ViewChild ,  ElementRef} from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit {
  ctx: any;
  @ViewChild('myChart') myChart!: ElementRef;
  canvas: any;

  constructor() { }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Jan 19', 'Feb 20', 'Mar 21', 'Apr 22'],
        datasets: [{
          label: 'Current Value',
          data: [0, 20, 40, 50],
          backgroundColor: "rgb(115 185 243 / 65%)",
          borderColor: "#007ee7",
          fill: true,
        },
        {
          label: 'Invested Amount',
          data: [0, 20, 40, 50],
          backgroundColor: "#47a0e8",
          borderColor: "#007ee7",
          fill: true,


        }],
        
      },



    });

  }

}
