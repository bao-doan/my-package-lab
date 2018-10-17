import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers';
@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {
  map: L.Map;
  marker;
  constructor() {}
  initMap() {
    this.map = L.map('maps', { zoomDelta: 1, zoomSnap: 0.5 }).setView([10.766102, 106.747377], 16);

    L.tileLayer('http://map.stis.vn/bright//{z}/{x}/{y}.png', {
      attribution: '&copy; FPT Information Systems'
    }).addTo(this.map);

    // L.marker([10.766102, 106.747377]).addTo(this.map);
    L.marker([10.766102, 106.747377]).addTo(this.map);
  //   L.polygon([
  //     [51.509, -0.08],
  //     [51.503, -0.06],
  //     [51.51, -0.047]
  // ]).addTo(this.map);
  }
  ngOnInit() {
    this.initMap();
  }
}
