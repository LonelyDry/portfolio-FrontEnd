import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-education',
  templateUrl: '../././projects/projects.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  data: any;


  constructor(
    private DataService: DataService
  ) {

  }

  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (
      this.data = data.education
    ));

  }


}
