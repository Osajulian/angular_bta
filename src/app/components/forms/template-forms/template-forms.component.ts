import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactMethods = [
    {id: 1, name:'Email'},
    {id: 2, name:'phone'},
    {id: 3, name:'mail'}
  ];

  submit(f) {
    console.log(f.value);
  }

}
