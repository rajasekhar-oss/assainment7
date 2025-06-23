import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechstaffComponent } from './techstaff/techstaff.component';
import { StudentComponent } from './student/student.component';
import { MentorsComponent } from './mentors/mentors.component';
import { TeacherComponent } from './teacher/teacher.component';
// import { ComponenetComponent } from './componenet/componenet.component';
// import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
    
    // {path:"componenet", component:ComponenetComponent},
    // {path:"overview", component:OverviewComponent}
    {path:'techstaff', component:TechstaffComponent},
    {path:'students', component:StudentComponent},
    {path:'mentors', component:MentorsComponent},
    {path:'teachers', component:TeacherComponent}
];
