import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LeafletComponent } from './leaflet/leaflet.component';

const leafletRoutes: Routes = [
  { path: '', component: LeafletComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(leafletRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class LeafletRoutingModule { }
