import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesPathService {
  _login : string = 'https://localhost:7126/api/LoginApi/Login';
  _modules : string ='https://localhost:7126/api/ModuleListApi?Username=nn';
  _modulesDTL : string ='https://localhost:7126/api/ModulesDTLApi';

  constructor() { }
}
