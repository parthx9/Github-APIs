import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon'
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../user-details.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private _ActivatedRoute: ActivatedRoute, private userDetails: UserDetailsService) { }

  id: any
  user: any

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      console.log(this.id)
    });

    this.userDetails.getUser(this.id)
    .subscribe(
      (data) => {
        console.log(data)
        this.user = data
      }
    )

  }

}
