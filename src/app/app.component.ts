import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private http: HttpClient){
    // userList;
  }

  ngOnInit(): void {
    console.log("p")
    this.http.get("https://api.github.com/users")
    .subscribe(users => {
      console.log(users)
      // this.userList = users
    });
  }

}
