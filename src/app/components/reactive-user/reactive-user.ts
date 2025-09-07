import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {
  userList: any[] = [];
  http = inject(HttpClient);

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email,]),
    password: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    mobileNo: new FormControl('', Validators.required),
  });

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
    const formValue = this.userForm.value;

    debugger;
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue).subscribe({
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
}
