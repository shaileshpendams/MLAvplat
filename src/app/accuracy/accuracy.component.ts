import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-accuracy',
  templateUrl: './accuracy.component.html',
  styleUrls: ['./accuracy.component.scss']
})

export class AccuracyComponent {
  title = 'Avplatsentiment';
  public chart: any;

  public chartData: number[] = [];
  public chartLabels: string[] = ['Negative', 'Neutral', 'Positive'];
  public chartType: string = 'bar';
  public chartLegend: boolean = true;
  @ViewChild('barChartCanvas')
  barChartCanvas!: ElementRef;
  @ViewChild('pieChartCanvas')
  pieChartCanvas!: ElementRef;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchData();
    this.fetchSentimentResults()
  }
  fetchData(): void {
    this.dataService.getAccuracyResults()
      .subscribe((response: any) => {

        console.log(response)        //  this.feedbackList = [response.Negative, response.Neutral, response.Positive];
      });
  }

  fetchSentimentResults(): void {
    this.dataService.getSentimentResults()
      .subscribe((response: any) => {
        this.createChart(response, 'bar', this.barChartCanvas);
        this.createChart(response, 'pie', this.pieChartCanvas);
        this.chartData = [response.Negative, response.Neutral, response.Positive];
        console.log(response)

      });
    }

    createChart(data: any, type: any, canvas: ElementRef): void {
      const ctx = canvas.nativeElement.getContext('2d');
  
      new Chart(ctx, {
        type: type,
        data: {
          labels: ['Negative', 'Neutral', 'Positive'],
          datasets: [{
            label: 'Sentiment Analysis Results',
            data: [data.Negative, data.Neutral, data.Positive],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)', // Red for Negative
              'rgba(54, 162, 235, 0.5)', // Blue for Neutral
              'rgba(75, 192, 192, 0.5)' // Green for Positive
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
}
