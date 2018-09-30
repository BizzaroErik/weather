import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  @Input() weatherForecast: any;
  farenheightTemp: number;
  constructor() { 
  }


  ngOnInit() {
  }

}
