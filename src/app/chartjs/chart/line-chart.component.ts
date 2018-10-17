import { Component } from "@angular/core";
import { ChartComponent } from "angular2-chartjs";

@Component({
  selector: 'app-line-chart',
  template: `
  <chart #chartCanvas [type]="type" [data]="data" [options]="options" class="m-chart"></chart>
  `
})
export class LineChartComponent {
  count = 0;
  type = 'line';
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'dataset_1',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: [
          '#0f0'
        ],
        backgroundColor: '#0f0',
        borderWidth: 1 ,
        fill: false,
        lineTension: 0,
      },
      {
        label: 'dataset_2',
        data: [3, 5, 10, 6, 10, 1],
        borderColor: [
          '#00f'
        ],
        backgroundColor: 'rgba(0,0,255,.5)',
        borderWidth: 1,
        fill: true,
      }
    ]
  };
  options = {
    title: {
      text: ['Favourite Colors', 'Title_2']
    },
    legend: {
      position: 'bottom'
    },
    maintainAspectRatio: true,
    responsive: true,
    tooltips: {
      mode: 'point'
    },
    events: ['mousemove'],
  };
  dataUpdate = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [1, 12, 6, 20, 4, 9],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  constructor() {}
  destroyChart(chart: ChartComponent) {
    chart.chart.destroy();
  }
  updateChart(chart: ChartComponent) {
    // chart.data = this.dataUpdate;
    chart.chart.update({data: this.updateChart, options: this.options});
  }
  canvasEvent(chart: ChartComponent) {
    console.log(chart.clickDataset);
  }
  clickHandler(event) {
    console.log(event);
  }
}
