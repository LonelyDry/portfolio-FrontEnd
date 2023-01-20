import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience:any ;
  
  constructor (
    private DataService:DataService
  ) {

  }

  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (
      this.experience = data.experience
    ));
    }

}