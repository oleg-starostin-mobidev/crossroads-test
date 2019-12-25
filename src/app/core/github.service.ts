import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getCommits() {
    const url = `repos/${environment.repoOwner}/${environment.project}/commits`;
    return this.http.get(url);
  }
}
