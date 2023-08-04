import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesPathService {
  _rootApi : string = 'https://localhost:7126/'
  _login : string = 'https://localhost:7126/LoginApi/Login';
  _modules : string ='https://localhost:7126/ModuleListApi';
  _modulesDTL : string ='https://localhost:7126/ModulesDTLApi';
  _allowUser : string ='https://localhost:7126/AllowUserApi';
  _currency : string ='https://localhost:7126/CurrencyApi';

  constructor() { }

  ngOnInit(): void {
    
  }

  currentApiPath(){

  }
}
