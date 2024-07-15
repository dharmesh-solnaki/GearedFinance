import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private API_URL:string = "https://localhost:7113/api/User";

  constructor(private _http:HttpClient ) {}
  

  getAllUsers():Observable<User[]>{
    return this._http.get<User[]>(this.API_URL);
  }
  addUser(user:User): Observable<User>{    
    return this._http.post<User>(this.API_URL,user);
  }
  // updateUser(id:number,user:User){
  //  return this._http.put<User>(this.API_URL/{id})
  // }
}
