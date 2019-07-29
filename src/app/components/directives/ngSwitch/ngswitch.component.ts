import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  viewMode = 'map';

  classStyles  = {
    'active': true,
    'nav-link': true
}


  constructor() { }

  ngOnInit() {
  }

}
