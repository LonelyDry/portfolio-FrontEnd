import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://localhost:5001/Portfolio"

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
