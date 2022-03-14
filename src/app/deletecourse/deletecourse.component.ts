import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deletecourse',
  templateUrl: './deletecourse.component.html',
  styleUrls: ['./deletecourse.component.css']
})
export class DeletecourseComponent implements OnInit {

  courses: Course[] =[];
  constructor(private service:CourseService,private router: Router) { }

  ngOnInit():void{
    this.getcourses();
  }
  private getcourses(){
    this.service.getcourses().subscribe(data=>{this.courses=data});
  }

  deletecourse(courseid: number){
    this.service.deletecourse(courseid).subscribe(data=>{alert("Record Deleted Successfully");this.getcourses();})
  }
}
