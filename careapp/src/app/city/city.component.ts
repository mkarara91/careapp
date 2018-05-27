import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city:string ="berlin";
  WeatherText:string =" Get Weather";
  weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather(){
   this.weatherService.getWeather(this.city).subscribe(
     data => {this.weather = data},
     err => console.error(err),
     () => console.log('done loading weather for:' + this.city)
   );
  }

}
