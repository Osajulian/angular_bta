import { Component, OnInit } from '@angular/core';
import { DatepickerDateCustomClasses } from 'ngx-bootstrap/datepicker/models';

@Component({
  selector: 'app-ngx-bootstrap',
  templateUrl: './ngx-bootstrap.component.html',
  styleUrls: ['./ngx-bootstrap.component.css']
})
export class NgxBootstrapComponent implements OnInit {

  constructor() { }

  singleModel = 'on';
  mytime: Date = new Date();
  ngOnInit() {
  }

}
