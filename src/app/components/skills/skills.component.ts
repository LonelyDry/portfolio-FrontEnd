import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:any ;
  
  constructor (
    private DataService:DataService
  ) {

  }

  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (
      this.skills = data.skills
    ));
    }

}