import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  githubUrl = "https://api.github.com/users"

  getUsers = () => {
    return this.http.get(`${this.githubUrl}`)
  }

  searchUsers = (q: String) => {
    return this.http.get(`https://api.github.com/search/users?q=${q}`)
  }

  constructor(private http: HttpClient) { }
}
