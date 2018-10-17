import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'leaflet', pathMatch: 'full'},
  { path: 'chartjs', loadChildren: 'app/chartjs/chartjs.module#ChartjsModule'},
  { path: 'leaflet', loadChildren: 'app/leaflet/leaflet.module#LeafletModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
