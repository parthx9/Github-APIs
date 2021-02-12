import { Component, OnInit } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private users: UserListComponent) { }

  handleClick = () => {
    // e.preventDefault()
    console.log("c")
    //   console.log(e.currentTarget)
  }

  ngOnInit(): void {

  }

}
