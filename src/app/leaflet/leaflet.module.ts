import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './leaflet/leaflet.component';
import { LeafletRoutingModule } from './leaflet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LeafletRoutingModule
  ],
  declarations: [LeafletComponent],
  bootstrap: [LeafletComponent]
})
export class LeafletModule { }
