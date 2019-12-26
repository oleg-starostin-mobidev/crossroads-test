import { Component, OnInit } from '@angular/core';
import { GithubService } from '../core/github.service';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss']
})
export class CommitsListComponent implements OnInit {
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getCommits();
  }

  get isLoading () {
    return this.githubService.isLoading;
  }

  get commits() {
      return this.githubService.commits;
  }
}
