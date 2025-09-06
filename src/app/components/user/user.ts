import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": "",
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((res: any) => {
      this.userList = res;
    });
  }

  onSaveUser() {
    debugger;
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObj).subscribe({
      next: (res) => {
        debugger;
        alert('User created success');
        this.getUsers();
      },
      error: (error) => {
        debugger;
        alert('Error - ' + error.error);
      },
    });
  }

  onEdit(item: any) {
    this.userObj = item;
  }

  onUpdateUser() {
    // this.userObj.createdDate = new Date();
    this.http.put(`https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=` + this.userObj.userId, this.userObj).subscribe({
      next: () => {
        alert('User updated success');
        this.getUsers();
      },
      error: (error) => {
        alert('Error - ' + error.error);
      }
    });
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure want to delete?");
    if (isDelete)
      this.http.delete(`https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=` + id).subscribe({
        next: () => {
          alert('User delete success');
          this.getUsers();
        },
        error: (error) => {
          alert('Error - ' + error.error);
        }
      });
  }

  onReset() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": "",
    }
  }
}
