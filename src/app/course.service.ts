import { Injectable } from '@angular/core';
import { Courses } from './courses/mock-courses';
import { Course } from './course';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

getCourses():Observable<Course[]>{
  return of (Courses)}

  constructor() { }
}
