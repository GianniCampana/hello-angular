import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { console.log('courseListConstructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit CourseListComponent');

  }
  courses = [
    {
      id: 1,
      title: 'angular for dummies',
      description: 'angular introduction'
    },
    {
      id: 2,
      title: 'react for dummies',
      description: 'react introduction'
    },
    {
      id: 3,
      title: 'vue for dummies',
      description: 'vue introduction'
    },
    {
      id: 4,
      title: 'c# for dummies',
      description: 'c# introduction'
    }
  ];
  singleCourse = {
      id: 5,
      title: 'java for dummies',
      description: 'java introduction'
  };

}
