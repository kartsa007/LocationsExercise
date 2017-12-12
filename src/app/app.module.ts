import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { LocationService } from './location.service';
import { FirstCharUpperCasePipe } from './firstcharuppercase.pipe';
import { LocationsComponent } from './locations/locations.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstCharUpperCasePipe,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbtQJCrZj53n3q5ukRtsTGTtgEoGtVSjs'
    })
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
