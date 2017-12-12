import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Location } from './location';

@Injectable()
export class LocationService {
  locations: Location[] = [
    {id: 1, latitude: 50.00, longitude: 60.00},
    {id: 2, latitude: 51.00, longitude: 61.00}
    ];

  initReady: EventEmitter<void> = new EventEmitter<void>();
  constructor(private http: HttpClient) {
    this.getLocations();
  }


  fetch() {
    return this.locations;
  }

  getLocations() {
    this.http.get<Location[]>('http://localhost:8080/api/locations/')
      .subscribe(locations => {
      console.log('getLocations');
      this.locations = locations;
      this.initReady.emit();
​​​​    });
  }

  postLocation(location: Location) {
    this.http.post<Location>('http://localhost:8080/api/locations/', location)
      .subscribe((loc) => {
      console.log('postLocation');
      location.id  = loc.id;
      this.initReady.emit();
​​​​    });
  }

  deleteLoction(id: number) {
    const url = 'http://localhost:8080/api/locations/' + id;
    this.http.delete(url)
      .subscribe(() => {
        console.log('deleteLocation');
        this.initReady.emit();
​​​​    });
  }

  add(location: Location) {
    this.locations.push(location);
    this.postLocation(location);
  }

}
