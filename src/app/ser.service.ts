import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the User interface
export interface User {
  id:string;
  name:string;
  age:number;
  // Add other user properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class SerService {
  private apiUrl="http://localhost:3000";

  constructor(private http:HttpClient) { }
  getUsers(resource:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/${resource}`);
  }
  postUser(resource:string, user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/${resource}`, user);
  }
  deleteuser(resource:string, id:string){
    return this.http.delete(`${this.apiUrl}/${resource}/${id}`);
  }
  putUser(resource:string, user:User):Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${resource}/${user.id}`, user);
  }
}
