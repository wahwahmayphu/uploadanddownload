import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FileService {
  private server = 'http://localhost:9090';

  constructor(private http: HttpClient) { }
}
