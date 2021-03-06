import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import{FormsModule} from '@angular/forms';
import { WeatherForecastListComponent } from './weather-forecast-list/weather-forecast-list.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    WeatherForecastListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
