import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngFor.component.html',
  styleUrls: ['./ngFor.component.css']
})
export class NgForComponent implements OnInit {
  courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
  ];
  courses2 = [
    {id:4, name:'course4'},
    {id:5, name:'course5'},
    {id:6, name:'course6'}
  ];

  courses3;


  constructor() { }

  ngOnInit() {
  }

  onClickAdd() {
    this.courses2.push({id:this.courses2.length + 1, name:`course${this.courses2.length + 4}`});
  }

  onClickRemove(course) {
    let index = this.courses2.indexOf(course);
    this.courses2.splice(index, 1);

  }

  onClickUpdate(course) {
    course.name = course.name + ' has ben UPDATED!';

  }

  loadCourses3() {
    this.courses3 = [
      {id:1, name:'courseA'},
      {id:2, name:'courseB'},
      {id:3, name:'courseC'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;

  }

}
