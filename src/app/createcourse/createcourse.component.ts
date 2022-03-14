import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent implements OnInit {
  
  course:Course = new Course();
  constructor(private cservice:CourseService,private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.cservice.addcourses(this.course).subscribe(data=>{alert("Data inserted Successfully");this.gotocoursereg()},error => alert("Data Insertion Failed !!!"));
  }

  gotocoursereg(){
    this.router.navigate(['/courses']);
  }

}
