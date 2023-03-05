import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesPathService {
  _login :string = 'https://localhost:44323/WeatherForecast';
  _module : string = 'https://localhost:44323/WeatherForecast';
  _test : string = 'https://localhost:7126/api/LoginApi/Login';

  constructor() { }
}
