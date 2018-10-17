import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MyChartComponent } from './chart/chart.component';

const chartRoutes: Routes = [
  { path: '', component: MyChartComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(chartRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ChartRoutingModule { }
