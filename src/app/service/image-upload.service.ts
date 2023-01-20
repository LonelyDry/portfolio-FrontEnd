import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DataService } from './data.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private apiUrl = `http://localhost:5001/`

  constructor(
    private http: HttpClient,
  ) { }

  uploadFile(image:any): any {
    const formData = new FormData();
    formData.set('banner', image)
    formData.append('image', image)

    return this.http.post(this.apiUrl, formData)

  }
}
