import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  githubUrl = "https://api.github.com"

  getUsers = () => {
    return this.http.get(`${this.githubUrl}/users`)
  }

  searchUsers = (q: String) => {
    return this.http.get(`${this.githubUrl}/search/users?q=${q}`)
  }

  getUser = (q: String) => {
    return this.http.get(`${this.githubUrl}/users/${q}`)
  }

  constructor(private http: HttpClient) { }
}
