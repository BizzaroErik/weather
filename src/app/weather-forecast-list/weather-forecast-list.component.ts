import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {weatherBit} from 'src/environments/environment';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  @Input() searchThisArea: string;
  weatherBitURL: string;
  inBoundWeather: any[];
  cityDetails: any;
  constructor(private http: HttpClient){
    this.cityDetails = {
      cityName: '',
      stateCode:'',
    };
    this.inBoundWeather = [];
    
  }

  getWeather(){
    this.weatherBitURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.searchThisArea}&key=${weatherBit.config.apiKey}`;
    this.http.get(this.weatherBitURL).subscribe((results: any) =>{
      console.log('Weather: ');
      console.log(results);
      this.inBoundWeather =  results['data'];
      this.cityDetails.cityName = results['city_name'];
      this.cityDetails.stateCode = results['state_code'];
    });
  }

  ngOnInit() {
  }

}
