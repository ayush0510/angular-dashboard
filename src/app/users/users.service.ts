import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  
  constructor(private http: HttpClient) { }
  
  getUsers(){
    return this.http.get('https://api.myjson.com/bins/rccsr');
  }
  

}
