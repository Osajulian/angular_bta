import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngIf',
  templateUrl: './ngIf.component.html',
  styleUrls: ['./ngIf.component.css']
})
export class NgIfComponent implements OnInit {

  angular2Courses = ['Angular-2 course1', 'Angular-2 course2', 'Angular-2 course3'];
  angular4Courses = ['Angular-4 course1', 'Angular-4 course2', 'Angular-4 course3'];
  angular5Courses = ['Angular-5 course1', 'Angular-5 course2', 'Angular-5 course3'];


  constructor() { }

  ngOnInit() {
  }

 
  onClearCourses () {
    this.angular2Courses.length = 0;
    this.angular4Courses.length = 0;
    this.angular5Courses.length = 0;
  }

}
