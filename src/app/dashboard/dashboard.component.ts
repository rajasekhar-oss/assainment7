import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user={
    firstname: "",
    lastname: "",
    age: 0,
    email: ""
  }
  constructor(private route :ActivatedRoute)
{
  console.log(route.snapshot.paramMap.get('value'))
}
getvalue(st:any){
  console.log(st);
}
consoledata(forms:any){
  // console.log(this.user.firstname);
  // console.log(this.user.lastname);
  // console.log(this.user.age);
  // console.log(this.user.email);
  if(forms.valid){
console.log(forms);
  }else{
    console.log("fill");
  }
  
}
}
