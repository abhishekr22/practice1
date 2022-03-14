import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
    getcourses() :Observable<Course[]>{
      return this.http.get<Course[]>(`${"http://localhost:8090/course/allcourses"}`);
    }
    addcourses(course:Course) :Observable<Object>{
      return this.http.post(`${"http://localhost:8090/course/addcourse"}`,course);
    }
    deletecourse(courseid:number) :Observable<Object>{
      return this.http.delete(`${"http://localhost:8090/course/deletecourse"}/${courseid}`);
    }

  }

