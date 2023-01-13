import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'
// import {  } from '../../interface'

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  data:any;
  
  constructor (
    private DataService:DataService
  ) {

  }

  ngOnInit(): void {
    this.DataService.getTasks().subscribe((Portfolio) => (
      this.data = Portfolio.Profile[0]
    ));
    }

}
