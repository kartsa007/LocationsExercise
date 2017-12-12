import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService} from '../location.service';
import { Location } from '../location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Location[];
  lng: number;
  lat: number;

  constructor(private locationService: LocationService,
              private http: HttpClient) {
    // this.locations = this.locationService.fetch();
  }

  ngOnInit() {
    this.locationService.initReady.subscribe(() => {
      console.log('initReady saapui');
      this.locations = this.locationService.fetch();
    });
  //    this.http.get<Location[]>('http://localhost:8080/api/locations/').subscribe((locations) =>
    // this.locationService.getLocations();
  }

  addLocation(lat: number, lng: number) {
    if (typeof lat === 'number' && typeof lng === 'number') {
      const location: Location = {latitude: lat, longitude: lng};
      this.locationService.add(location);
      this.lng = undefined;
      this.lat = undefined;
    }
  }

  deleteLocation(ind: number, location: Location) {
    this.locations.splice(ind, 1);
    this.locationService.deleteLoction(location.id);
  }

  mapClicked(event: any) {
    console.log(event);
    const location: Location = {latitude: event.coords.lat,
    longitude: event.coords.lng};
    this.locationService.add(location);
  }
}
