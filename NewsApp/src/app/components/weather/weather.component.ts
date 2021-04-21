import { Component, OnInit } from '@angular/core';
import { GeolocationService, POSITION_OPTIONS } from '@ng-web-apis/geolocation';
import { HttpClient } from "@angular/common/http"
import { take } from 'rxjs/operators'
import { IWeather } from '../../interfaces/weather'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  localWeather: IWeather = {
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 282.55,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  }

  weatherImgUrl: string = 'http://openweathermap.org/img/wn/'  + this.localWeather.weather[0].icon + ".png"

  constructor(private readonly geolocation$: GeolocationService, private http: HttpClient) { }

  ngOnInit(): void {
    this.geolocation$.pipe(take(1)).subscribe(position => {
      const { latitude, longitude } = position.coords;

      //Send latitude and longitude to API
      // this.http.get("http://localhost:3000/weather?latitude=" + latitude + "&longitude=" + longitude).subscribe((response: any) => {
      //   this.localWeather = response
      //   this.weatherImgUrl = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
      // })

    })
  }
}
