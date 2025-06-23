import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SerService, User } from './ser.service'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  // users: User[] = [];
  // newUser: User = { id:'', name: '', age: 0 };
  // title = 'app';
  // studentId: string = "";
  // isEditMode: boolean = false;
  // // items = ['Angular', 'React', 'Vue'];
  constructor(private userService: SerService, private http: HttpClient, private route: Router) { }

  // ngOnInit() {
  //   this.userService.getUsers().subscribe(
  //     (data) => {
  //       this.users = data;
  //     },
  //     (error) => {
  //       console.error("error in fetching");
  //     }
  //   )
  // }
  // addUser() {

  //   if (!this.newUser.name || !this.newUser.age) return;

  //   this.userService.postUser(this.newUser).subscribe(
  //     (user) => {
  //       this.users.push(user);       // add to local list
  //       this.newUser = { id:'', name: '', age: 0 }; // reset form
  //     },
  //     (error) => console.error("Post error", error)
  //   );
  // }
  // editStudent(user: User) {
  //   this.newUser = { ...user };
  //   this.studentId = user.id;
  //   this.isEditMode = true;
  // }
  // onSubmit() {
  //   if (this.isEditMode) {
  //     // Edit existing user
  //     const obj = {
  //       id: this.studentId,
  //       name: this.newUser.name,
  //       age: this.newUser.age
  //     };
  //     this.userService.putUser(obj).subscribe(
  //       (res: any) => {
  //         const index = this.users.findIndex(u => u.id === this.studentId);
  //         if (index !== -1) {
  //           this.users[index] = obj;
  //         }
  //         this.resetForm();
  //       },
  //       error => console.error("PUT error", error)
  //     );
  //   } else {
  //     // Add new user
  //     this.addUser();
  //   }
  // }
  // resetForm() {
  //   this.newUser = { id:'', name: '', age: 0 };
  //   this.studentId = '';
  //   this.isEditMode = false;
  // }
  // delete(id:string){
  //   this.userService.deleteuser(id).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //       this.users = this.users.filter(user => user.id !== id); 
  //     },  error: (err) => {
  //     console.error("Delete failed", err);
  //   }
  //   })
  // }
  techstaff(){
this.route.navigate(['/techstaff']);
  }
  students(){
    this.route.navigate(['/students']);
  }
  teachers(){
    this.route.navigate(['/teachers']);
  }
  mentors(){
    this.route.navigate(['/mentors'])
  }


}
