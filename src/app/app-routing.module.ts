import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { DeletecourseComponent } from './deletecourse/deletecourse.component';
const routes: Routes = [
  
  {path:'courses', component: ViewcoursesComponent },
  {path: '', redirectTo: 'createcourse', pathMatch: 'full'},
  {path:'updatecourse', component: UpdatecourseComponent},
  {path:'deletecourse',component: DeletecourseComponent},
  {path:'createcourse', component:CreatecourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
