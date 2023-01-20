import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  profile: any;
  showInput: boolean = true;
  url: string | null | ArrayBuffer = ''
  archivos: any = [];


  constructor(
    private DataService: DataService,
    private http: HttpClient
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


  onSelectedFile(imageInput: FileList | null) {
    if (imageInput) {
      const reader = new FileReader()
      reader.readAsDataURL(imageInput[0])
      reader.onload = (event: Event) => {
        let fileReader = event.target as FileReader
        this.url = fileReader.result;
      }
      // this.archivos.push(archivo)
    }

  }

  uploadFile(): any {
    const formData = new FormData();

  }

}
