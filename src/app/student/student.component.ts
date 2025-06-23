import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SerService } from '../ser.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  id: string;
  name: string;
  age: number;
}

@Component({
  selector: 'app-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  users: User[] = [];
  newUser: User = { id:'', name: '', age: 0 };
  title = 'app';
  studentId: string = "";
  isEditMode: boolean = false;
  // items = ['Angular', 'React', 'Vue'];
  constructor(private userService: SerService, private http: HttpClient) { }

  ngOnInit() {
    this.userService.getUsers("student").subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error("error in fetching");
      }
    )
  }
  addUser() {

    if (!this.newUser.name || !this.newUser.age) return;

    this.userService.postUser("student", this.newUser).subscribe(
      (user) => {
        this.users.push(user);       // add to local list
        this.newUser = { id:'', name: '', age: 0 }; // reset form
      },
      (error) => console.error("Post error", error)
    );
  }
  editStudent(user: User) {
    this.newUser = { ...user };
    this.studentId = user.id;
    this.isEditMode = true;
  }
  onSubmit() {
    if (this.isEditMode) {
      // Edit existing user
      const obj = {
        id: this.studentId,
        name: this.newUser.name,
        age: this.newUser.age
      };
      this.userService.putUser("student", obj).subscribe(
        (res: any) => {
          const index = this.users.findIndex(u => u.id === this.studentId);
          if (index !== -1) {
            this.users[index] = obj;
          }
          this.resetForm();
        },
        error => console.error("PUT error", error)
      );
    } else {
      // Add new user
      this.addUser();
    }
  }
  resetForm() {
    this.newUser = { id:'', name: '', age: 0 };
    this.studentId = '';
    this.isEditMode = false;
  }
  delete(id:string){
    this.userService.deleteuser("student", id).subscribe({
      next:(res)=>{
        console.log(res);
        this.users = this.users.filter(user => user.id !== id); 
      },  error: (err) => {
      console.error("Delete failed", err);
    }
    })
  }


}
