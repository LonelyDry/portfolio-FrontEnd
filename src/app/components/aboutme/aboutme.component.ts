import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  profile: any;

  constructor(
    private DataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (
      this.profile = data.profile
    ));
  }







}
