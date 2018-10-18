import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers';

const myIcon = L.icon({
  iconUrl: 'assets/images/marker.png',
  iconSize: [50, 50],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'assets/images/shadow.png',
  shadowSize: [30, 7],
  shadowAnchor: [10, 15]
});

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {
  map: L.Map;
  marker;
  tileLayers;
  popup = L.popup();
  constructor() {}
  initMap() {
    this.map = L.map('maps', { zoomDelta: 1, zoomSnap: 0.5 }).setView( [10.766102, 106.747377], 14);
    this.tileLayers = L.tileLayer('http://map.stis.vn/bright/{z}/{x}/{y}.png', {
      attribution: '&copy; FPT Information Systems',
    }).addTo(this.map);
    this.marker = L.marker([10.766102, 106.747377], {
    icon: myIcon,
    draggable: true,
    keyboard: false,
    title: 'marker_title',
    alt: 'marker_alt'
  }).addTo(this.map)
    .bindTooltip('my tooltip text')
    .openTooltip()
    .bindPopup('Marker_popup');
    // Init the map
    // Render tiles into map

    // Add marker, tooltip, popup
    // The invoked function is assigned to this.marker
    // so that this.marker can be used to attach an event later
    // Add polygon, popup
    L.polygon([
      [10.767638, 106.746909],
      [10.777638, 106.756909],
      [10.787638, 106.786909]
    ])
      .addTo(this.map)
      .bindPopup('Polygon_popup');
    // Add circle, popup
    L.circle([10.767638, 106.746909], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 260,
    })
      .addTo(this.map)
      .bindPopup('Circle_popup');
    // Standalone popup
    this.popup
      .setLatLng([10.767638, 106.736909])
      .setContent('Standalone popup')
      .openOn(this.map);
    // Attach an event on marker
    // this.marker.dragging.addHooks(this.getSth());
    this.map.on('click', this.log);
    this.map.on('click', this.movePopup);
  }
  movePopup(event) {
    console.log(this.popup);
    this.popup.setLatLng(event.latlng)
    .setContent('clicked on ' + event.latlng).openOn(this.map);
  }
  log(event) {
      console.log('Lat', event.latlng.lat, 'Lng', event.latlng.lng);
    }
  eventHandler() {
    console.log('marker is moved');
    // console.log(this.marker.getPopup());
  }
  getSth(): any {
    // console.log(this.marker.getLatLng());
    return this.marker.getLatLng();
  }
  setSth(lat, lng): void {
    this.marker.setLatLng([lat, lng]);
  }
  ngOnInit() {
    this.initMap();
  }
}
