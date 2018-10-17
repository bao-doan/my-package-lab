import { Component } from "@angular/core";
import { theme } from '../../_const/theme';
@Component({
  selector: 'app-pie-chart',
  template: `
    <chart type="pie" [data]="data" [options]="options" class="m-chart"></chart>
  `
})
export class PieChartComponent {
  data = {
    labels: ['Label_1', 'Label_2', 'Label_3'],
    datasets: [
      {
        label: '',
        data: [10, 50, 30],
        backgroundColor: theme.color
      }
    ]
  };
  options = {
    legend: {
      position: 'bottom'
    }
  };
  constructor() {}
}
