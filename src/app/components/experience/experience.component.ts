import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  data:any ;
  
  constructor (
    private DataService:DataService
  ) {

  }

  ngOnInit(): void {
    this.DataService.getTasks().subscribe((Portfolio) => (
      this.data = Portfolio.experience[0]
    ));
    }

}