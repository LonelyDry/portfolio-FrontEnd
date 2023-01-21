import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service'
import { HttpClient } from '@angular/common/http';
import { ImageUploadService } from 'src/app/service/image-upload.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  profile: any;
  showInput: boolean = false;
  url: string | null | ArrayBuffer = ''
  archivos: any = [];


  constructor(
    private DataService: DataService,
    private http: HttpClient,
    private ImageUpload:ImageUploadService
  ) {

  }

  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (
      this.profile = data.banner
    ));
  }

  onEdit() {
    this.url = null
  }
  onshowInput(){
    this.showInput = !this.showInput
  }


  onSelectedFile(imageInput: FileList | null) {
    if (imageInput) {
      const reader = new FileReader()
      reader.readAsDataURL(imageInput[0])
      reader.onload = (event: Event) => {
        let fileReader = event.target as FileReader
        this.url = fileReader.result;
      }
      this.archivos.push(imageInput)
    }

  }

  uploadFile(image:any) {
    console.log("banner upload works")
    this.ImageUpload.uploadFile(image)
  }

}
