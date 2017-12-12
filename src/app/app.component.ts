import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title | firstcharuppercase}}</h1>
    <p>Today is {{dateVar}}</p>
    <p>By clicking the map you can add markers to it.</p>
    <app-locations></app-locations>
  `
})
export class AppComponent {
  title = 'locations-app';
  dateVar = new Date().toLocaleDateString('fi');
}
