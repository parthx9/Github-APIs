import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;

  handleSubmit = (q: any) => {
    console.log(q)
    this.userDetails.searchUsers(q)
    .subscribe(
      (data: any) => {
        console.log(data)
        this.users = data.items
      }
    )
  }

  constructor(private userDetails: UserDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.userDetails.getUsers()
    .subscribe(
      (data) => {
        console.log(data)
        this.users = data
        console.log(this.users)
      }
    )
  }

}
