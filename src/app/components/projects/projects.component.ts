import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  data: any;


  constructor(
    private DataService: DataService
  ) {

  }

  ngOnInit(): void {
    this.DataService.getTasks().subscribe((Portfolio) => (
      this.data = Portfolio.projects[0]
    ));

  }


}
