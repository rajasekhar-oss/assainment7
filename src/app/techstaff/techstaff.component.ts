import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SerService } from '../ser.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Define the User interface
export interface User {
  id?: string;
  name: string;
  age: number;
}

@Component({
  selector: 'app-techstaff',
  imports: [CommonModule, FormsModule],
  templateUrl: './techstaff.component.html',
  styleUrl: './techstaff.component.css'
})
export class TechstaffComponent {
  techstaff: User[] = [];
  newUser: User = {name: '', age: 0 };
  title = 'app';
  studentId: string | undefined;
  isEditMode: boolean = false;
  // items = ['Angular', 'React', 'Vue'];
  constructor(private userService: SerService, private http: HttpClient) { }

  ngOnInit() {
    this.userService.getUsers('techstaff').subscribe(
      (data) => {
        this.techstaff = data;
      },
      (error) => {
        console.error("error in fetching");
      }
    )
  }
  addUser() {

    if (!this.newUser.name || !this.newUser.age) return;
    const { id, ...userWithoutId } = this.newUser;

    this.userService.postUser('techstaff', userWithoutId).subscribe(
      (user) => {
        this.techstaff.push(user);       // add to local list
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
        id: this.studentId!,
        name: this.newUser.name,
        age: this.newUser.age
      };
      this.userService.putUser("techstaff", obj).subscribe(
        (res: any) => {
          const index = this.techstaff.findIndex(u => u.id === this.studentId);
          if (index !== -1) {
            this.techstaff[index] = obj;
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
    this.userService.deleteuser("techstaff", id).subscribe({
      next:(res)=>{
        console.log(res);
        this.techstaff = this.techstaff.filter(user => user.id !== id); 
      },  error: (err) => {
      console.error("Delete failed", err);
    }
    })
  }


}

