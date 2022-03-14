import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { DeletecourseComponent } from './deletecourse/deletecourse.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewcoursesComponent,
    CreatecourseComponent,
    UpdatecourseComponent,
    DeletecourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
