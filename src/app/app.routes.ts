import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechstaffComponent } from './techstaff/techstaff.component';
import { StudentComponent } from './student/student.component';
import { MentorsComponent } from './mentors/mentors.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component } from '@angular/core';
import { Home1Component } from './dashboard/home1/home1.component';
import { Home2Component } from './dashboard/home2/home2.component';
// import { ComponenetComponent } from './componenet/componenet.component';
// import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
    
    // {path:"componenet", component:ComponenetComponent},
    // {path:"overview", component:OverviewComponent}
    {path:'techstaff', component:TechstaffComponent},
    {path:'students', component:StudentComponent},
    {path:'mentors', component:MentorsComponent},
    {path:'teachers', component:TeacherComponent},
    {path:'dashboard/:value', component:DashboardComponent, children: [
        { path: 'home1', component: Home1Component },
        {path:'home2', component:Home2Component}
    ]}


];
