import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileService } from './file.service';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (private fileservice : FileService){}

  //define a function to upload files
  onUploadFiles(files: File[]) : void {
    const formData = new FormData();
    for(const file of files) { 
      formData.append('files', file, file.name); 
    }
    this.fileservice.upload(formData).subscribe(
      event => {
        console.log(event);
        this.resportProgres(event)
      },
      (error: HttpErrorResponse) => { 
        console.log(error) 
      }
    );
  }

  //define a function to download files
  onDownloadFiles(files: File[]) : void {
    const formData = new FormData();
    for(const file of files) { 
      formData.append('files', file, file.name); 
    }
    this.fileservice.upload(formData).subscribe(
      event => {
        console.log(event);
        this.resportProgres(event)
      },
      (error: HttpErrorResponse) => { 
        console.log(error) 
      }
    );
  }

  private resportProgres(event: HttpEvent<string[]>) {
    throw new Error('Method not implemented.');
  }
}
