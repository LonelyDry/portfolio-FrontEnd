import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  data:any ;
  
  constructor (
    private DataService:DataService
  ) {

  }

  ngOnInit(): void {
    this.DataService.getTasks().subscribe((Portfolio) => (
      this.data = Portfolio.skills[0]
    ));
    }

}