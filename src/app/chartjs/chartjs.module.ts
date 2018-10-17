import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'angular2-chartjs';
import { MyChartComponent } from './chart/chart.component';
import { PieChartComponent } from './chart/pie-chart.component';
import { LineChartComponent } from './chart/line-chart.component';
import { ChartRoutingModule } from './/chart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    ChartRoutingModule
  ],
  declarations: [
    MyChartComponent,
    PieChartComponent,
    LineChartComponent
  ],
  bootstrap: [MyChartComponent]
})
export class ChartjsModule {}
