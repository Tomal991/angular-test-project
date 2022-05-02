import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Courses } from './mock-courses';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses = Courses;
  selectedCourse: Course;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}
  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe((courses) => this.courses);
  }
}
