import { Component, OnInit } from '@angular/core';
import { GithubService } from '../core/github.service';
import { CommitItem } from "../commit-item/commit-item";

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss']
})
export class CommitsListComponent implements OnInit {
    commits: CommitItem[] = [];

  constructor(
      private githubService: GithubService
  ) { }

  ngOnInit() {
    this.githubService.getCommits().subscribe(
        (data: any) => {
            data.forEach((item) => {
                this.commits.push(new CommitItem(item))
            })
        });
  }
}
